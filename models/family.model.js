module.exports = (sequelize, DataTypes) => {
  const Family = sequelize.define("family", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firebase_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
  });
  return Family;
};
