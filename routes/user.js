const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.findAll(); // TODO: This also shows passwords (stored in plaintext)
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId
  );
  res.send(user);
});

module.exports = router;
