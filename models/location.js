const location = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    coordinates: {
      type: DataTypes.STRING
    }
  });

  return Location;
};

module.exports = location;
