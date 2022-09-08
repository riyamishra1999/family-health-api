const { UUIDV4 } = require("sequelize");
const { sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define("Medicine", { //modelname
    medicineId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    doses: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate: {
        notEmpty: true,
      },
    },
    usage: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notEmpty: true,
      },
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Medicine;
};
