const { UUIDV4 } = require("sequelize");
const { sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  //tellsnodewhichcodetoexportfromfile
  const Report = sequelize.define("Report", {
    //definingmodel
    reportId: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    reportURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  return Report;
};
