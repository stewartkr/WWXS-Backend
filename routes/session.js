const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  // TODO: Get currently logged in user
});

router.post('/logout', (req, res) => {
  // TODO: Logout
});

router.post('/login', async (req, res) => {
  if (!req.context.loggedIn) {
    req.context.models.User.findByLogin(
      req.body.username
    ).then((user) => {
      user.validateLogin(req.body.password)
        .then((result) => {
          // TODO: Login
          res.send(result);
        });
    }).catch((err) => {
      console.error(err);
      res.send(err);
    });
  }
  else {
    res.send(false);
  }
});

module.exports = router;
