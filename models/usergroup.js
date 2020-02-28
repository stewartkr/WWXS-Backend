const usergroup = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('usergroup', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  UserGroup.associate = (models) => {
    UserGroup.hasMany(models.User);
    UserGroup.hasMany(models.Buoy);
  };

  UserGroup.findByName = async (name) => {
    const group = UserGroup.findOne({
      where: { name }
    });

    return group;
  };

  UserGroup.addUserByName = async (groupName, login) => {
    const user = sequelize.models.User.findByName(login);
    const group = UserGroup.findByName(groupName);

    if (user && group) {
      UserGroup.add(group, user);
    }
  };

  UserGroup.addBuoyByName = async (groupName, name) => {
    const buoy = sequelize.models.Buoy.findByName(name);
    const group = UserGroup.findByName(groupName);

    if (buoy && group) {
      UserGroup.add(group, buoy);
    }
  };

  UserGroup.isUserInGroup = async (groupName, userName) => {
    const group = UserGroup.findByName(groupName);
    let found = false;

    if (group) {
      const users = group.getUsers();

      users.forEach((user) => {
        if (user.username === userName) found = true;
      });
    }

    return found;
  };

  UserGroup.isBuoyInGroup = async (groupName, buoyName) => {
    const group = UserGroup.findByName(groupName);
    let found = false;

    if (group) {
      const buoys = group.getBuoys();

      buoys.forEach((buoy) => {
        if (buoy.name === buoyName) found = true;
      });
    }

    return found;
  };

  return UserGroup;
};

module.exports = usergroup;
