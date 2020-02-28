const data = (sequelize, DataTypes) => {
  const Data = sequelize.define('data', {
    timestamp: {
      type: DataTypes.DATE
    },
    surfTemp: {
      type: DataTypes.FLOAT``
    },
    surfSalinity: {
      type: DataTypes.FLOAT
    },
    surfInsolation: {
      type: DataTypes.FLOAT
    },
    depthTurbidity: {
      type: DataTypes.FLOAT
    }
  });

  Data.associate = (models) => {
    Data.belongsTo(models.Buoy); // Collecting buoy
    Data.belongsTo(models.User); // Uploading user
    // Data.hasOne(models.Location);
  };

  return Data;
};

module.exports = data;
