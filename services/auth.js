const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { models } = require('../models');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  models.User.findByPk(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err);
    });
});

const local = new LocalStrategy((username, password, done) => {
  models.User.findByLogin(username)
    .then((user) => {
      if (!user || !user.validateLogin(password)) {
        done(null, false, { message: 'Invalid username/password' });
      }
      else {
        done(null, user);
      }
    })
    .catch((err) => done(err));
});

module.exports = { local };
