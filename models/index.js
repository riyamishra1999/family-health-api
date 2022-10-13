"use strict";

const fs = require("fs"); //workwithfilesysinmycomp
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename); //toreturngetfilenameportionofpath
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env]; //createconfigurationfilesinnode
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.medicine = require("./medicine.model")(sequelize, Sequelize);
db.family = require("./family.model")(sequelize, Sequelize);
db.report = require("./report.model")(sequelize, Sequelize);
db.diagnosis = require("./diagnosis.model")(sequelize, Sequelize);

db.family.hasMany(db.user, { as: "users" });
db.user.belongsTo(db.family, { as: "family" });

db.user.hasMany(db.diagnosis, {
  as: "diagnosis",
});

db.diagnosis.belongsTo(db.user, {
  as: "users",
});

db.diagnosis.hasMany(db.report, {
  as: "reports",
});
db.report.belongsTo(db.diagnosis, {
  as: "diagnoses",
});
module.exports = db;
