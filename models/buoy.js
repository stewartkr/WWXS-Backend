const buoy = (sequelize, DataTypes) => {
  const Buoy = sequelize.define('buoy', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    mac: {
      type: DataTypes.STRING,
      unique: true
    },
    pubKey: {
      type: DataTypes.STRING,
      unique: true
    },
    lastRetrieval: {
      type: DataTypes.DATE
    },
    version: {
      type: DataTypes.STRING
    }
  });

  Buoy.associate = (models) => {
    Buoy.hasMany(models.Data);
    Buoy.belongsTo(models.Group);
    // Buoy.hasOne(models.Location);
  };

  return Buoy;
};

module.exports = buoy;
