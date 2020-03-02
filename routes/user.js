const express = require('express');

const router = express.Router();

/* Get all users */
router.get('/', async (req, res) => {
  const users = await req.context.models.User.findAll(); // TODO: This also shows passwords (stored in plaintext)
  return res.send(users);
});

/* Get a specific user */
router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId
  );
  res.send(user);
});

/* Create a user */

module.exports = router;
