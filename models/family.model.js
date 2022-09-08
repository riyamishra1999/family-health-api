const { UUIDV4 } = require("sequelize");
const {sequelize, DataTypes}= require("sequelize");

 module.exports = (sequelize,DataTypes) => {
    const Family =  sequelize.define("family",{
        familyId : { 
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey:true,
           
        }

        
    });
    return Family;
 };
