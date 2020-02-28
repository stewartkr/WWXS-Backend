const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const messages = await req.context.models.Message.findAll();
  res.send(messages);
});

router.get('/:messageId', async (req, res) => {
  const message = await req.context.models.Message.findByPk(
    req.params.messageId
  );
  res.send(message);
});

router.post('/', async (req, res) => {
  const message = await req.context.models.Message.create({
    text: req.body.text,
    userId: req.context.loggedIn.id
  });

  res.send(message);
});

router.delete('/:messageId', async (req, res) => {
  let result = false;

  const message = await req.context.models.Message.findByPk(
    req.params.messageId
  );

  if (message && message.userId === req.context.loggedIn.id) {
    const destroyed = await req.context.models.Message.destroy({
      where: { id: req.params.messageId }
    });

    if (destroyed) {
      result = true;
    }
  }


  res.send(result);
});

module.exports = router;
