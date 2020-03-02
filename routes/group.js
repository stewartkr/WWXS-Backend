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
  ).catch((err) => {
    console.error(err);
  });

  const group = await req.context.models.Group.findByPk(
    req.params.groupId
  ).catch((err) => {
    console.error(err);
  });

  if (user && group) {
    await group.addUserByPk(user.id).catch((err) => console.error(err));
  }

  res.send((user && group ? user : false));
});

/* Remove a user from a group */
router.post('/remove/:groupId/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId
  ).catch((err) => console.error(err));

  const group = await req.context.models.Group.findByPk(
    req.params.groupId
  ).catch((err) => console.error(err));

  if (user && group) {
    await group.removeUserByPk(user.id).catch((err) => console.error(err));
  }

  res.send((user && group ? user : false));
});

/* Add a buoy to a group */
router.post('/add/:groupId/:buoyId', async (req, res) => {
  const buoy = await req.context.models.Buoy.findByPk(
    req.params.buoyId
  ).catch((err) => console.error(err));

  const group = await req.context.models.Group.findByPk(
    req.params.groupId
  ).catch((err) => console.error(err));

  if (buoy && group) {
    await group.addBuoyByPk(buoy.id).catch((err) => console.error(err));
  }

  res.send((buoy && group ? buoy : false));
});

/* Remove a buoy from a group */
router.post('/remove/:groupId/:buoyId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => {
    group.removeBuoyByPk(
      req.params.buoyId
    );
  })
    .catch((err) => console.error(err));

  res.send(true);
});

/* Check if user in group */
router.get('/:groupId/:userId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => {
    group.isUserInGroup(
      req.params.userId
    ).then((result) => {
      res.send(result);
    });
  }).catch((err) => console.error(err));
});

/* Check if buoy in group */
router.get('/:groupId/:buoyId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => {
    group.isBuoyInGroup(
      req.params.buoyId
    ).then((result) => {
      res.send(result);
    });
  }).catch((err) => console.error(err));
});

module.exports = router;
