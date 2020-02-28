const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: { // TODO: Don't use plaintext password
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

  User.findByLogin = async (username) => {
    const foundUser = await User.findOne({
      where: { username }
    });

    return foundUser;
  };

  return User;
};

module.exports = user;
