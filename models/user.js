const bcrypt = require('bcrypt');

const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    role: {
      type: DataTypes.STRING
    },
    lastLogin: {
      type: DataTypes.DATE
    }
  });

  User.beforeCreate(async (newUser) => {
    const saltRounds = 10;

    return new Promise((resolve, reject) => {
      bcrypt.hash(newUser.password, saltRounds)
        .then((pass) => {
          // eslint-disable-next-line no-param-reassign
          newUser.password = pass;
          resolve(newUser);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  });

  User.associate = (models) => {
    User.belongsTo(models.Group);
  };

  User.findByLogin = async (username) => User.findOne({
    where: { username }
  });

  User.prototype.validateLogin = function validPass(password) {
    return new Promise((resolve) => {
      bcrypt.compare(password, this.password)
        .then((result) => resolve(result));
    });
  };

  return User;
};

module.exports = user;
