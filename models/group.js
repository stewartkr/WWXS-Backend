const group = (sequelize, DataTypes) => {
  const Group = sequelize.define('group', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  });

  Group.associate = (models) => {
    Group.hasMany(models.User);
    Group.hasMany(models.Buoy);
  };

  Group.findByName = async (name) => Group.findOne({
    where: { name }
  });

  Group.addUserByPk = async (gid, uid) => {
    const user = sequelize.models.User.findByPk(uid);
    const foundGroup = Group.findByPk(gid);

    if (user && foundGroup) {
      Group.add(foundGroup, user);
    }
  };

  Group.removeUserByPk = async (gid, uid) => {
    const user = sequelize.models.User.findByPk(uid);
    const foundGroup = Group.findByPk(gid);

    if (user && foundGroup) {
      Group.remove(foundGroup, user);
    }
  };

  Group.addBuoyByPk = async (gid, bid) => {
    const buoy = sequelize.models.Buoy.findByPk(bid);
    const foundGroup = Group.findByPk(gid);

    if (buoy && foundGroup) {
      Group.add(foundGroup, buoy);
    }
  };

  Group.isUserInGroup = async (groupName, userName) => {
    const foundGroup = Group.findByName(groupName);
    let found = false;

    if (foundGroup) {
      const users = foundGroup.getUsers();

      users.forEach((user) => {
        if (user.username === userName) found = true;
      });
    }

    return found;
  };

  Group.isBuoyInGroup = async (groupName, buoyName) => {
    const foundGroup = Group.findByName(groupName);
    let found = false;

    if (foundGroup) {
      const buoys = foundGroup.getBuoys();

      buoys.forEach((buoy) => {
        if (buoy.name === buoyName) found = true;
      });
    }

    return found;
  };

  return Group;
};

module.exports = group;
