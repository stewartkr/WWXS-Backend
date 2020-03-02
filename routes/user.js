const express = require('express');

const router = express.Router();

/* Get all users */
router.get('/', async (req, res) => {
  req.context.models.User.findAll()
    .then((users) => res.send(users))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Get a specific user */
router.get('/:userId', async (req, res) => {
  req.context.models.User.findByPk(
    req.params.userId
  ).then((user) => res.send(user))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Create a user */
router.post('/', async (req, res) => {
  req.context.models.User.create({
    username: req.body.username,
    password: req.body.password // TODO: Hash password
  }).then((user) => res.send(user))
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

/* Remove a user */
router.post('/remove', async (req, res) => {
  req.context.models.User.destroy({
    where: { username: req.body.username }
  }).then((n) => {
    if (n) {
      res.send(true);
    }
    else {
      res.send(false);
    }
  }).catch((err) => {
    console.error(err);
    res.send(err);
  });
});

module.exports = router;
