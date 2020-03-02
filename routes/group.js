const express = require('express');

const router = express.Router();

/* Get all groups */
router.get('/', async (req, res) => {
  const groups = await req.context.models.Group.findAll();
  res.send(groups);
});

/* Get a specific group */
router.get('/:groupId', async (req, res) => {
  const group = await req.context.models.Group.findByPk(
    req.params.groupId
  );
  res.send(group);
});

/* Create a group */
router.post('/', async (req, res) => {
  const group = await req.context.models.Group.create({
    name: req.body.name
  });

  res.send(group);
});

/* Add a user to a group */
router.post('/add/:groupId/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId
  );

  const group = await req.context.models.Group.findByPk(
    req.params.groupId
  );

  if (user && group) {
    await req.context.models.Group.addUserByPk(group.id, user.id);
  }

  res.send((user && group ? user : false));
});

/* Remove a user from a group */
router.post('/remove/:groupId/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId
  );

  const group = await req.context.models.Group.findByPk(
    req.params.groupId
  );

  if (user && group) {
    await req.context.models.Group.removeUserByPk(group.id, user.id);
  }

  res.send((user && group ? user : false));
});

module.exports = router;
