const express = require('express');

const router = express.Router();

/* Get all groups */
router.get('/', async (req, res) => {
  req.context.models.Group.findAll()
    .then((groups) => res.send(groups))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Get a specific group */
router.get('/:groupId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => res.send(group))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Create a group */
router.post('/add', async (req, res) => {
  req.context.models.Group.create({
    name: req.body.name
  }).then((group) => res.send(group))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Remove a group */

router.post('/remove', async (req, res) => {
  req.context.models.Group.destroy({
    where: { name: req.body.name }
  }).then((n) => {
    if (n) {
      res.send(true);
    }
    else res.send(false);
  })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Add a user to a group */
router.post('/add/:groupId/user/:userId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => {
    group.addUserByPk(
      req.params.userId
    ).then(() => res.send(true));
  })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Remove a user from a group */
router.post('/remove/:groupId/user/:userId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => {
    group.removeUserByPk(
      req.params.userId
    ).then(() => res.send(true));
  })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Add a buoy to a group */
router.post('/add/:groupId/buoy/:buoyId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => {
    group.addBuoyByPk(
      req.params.buoyId
    ).then(() => res.send(true));
  })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Remove a buoy from a group */
router.post('/remove/:groupId/buoy/:buoyId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => {
    group.removeBuoyByPk(
      req.params.buoyId
    ).then(() => res.send(true));
  })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Check if user in group */
router.get('/:groupId/user/:userId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => {
    group.isUserInGroup(
      req.params.userId
    ).then((result) => {
      res.send(result);
    });
  }).catch((err) => {
    console.error(err);
    res.send(err);
  });
});

/* Check if buoy in group */
router.get('/:groupId/buoy/:buoyId', async (req, res) => {
  req.context.models.Group.findByPk(
    req.params.groupId
  ).then((group) => {
    group.isBuoyInGroup(
      req.params.buoyId
    ).then((result) => {
      res.send(result);
    });
  }).catch((err) => {
    console.error(err);
    res.send(err);
  });
});

module.exports = router;
