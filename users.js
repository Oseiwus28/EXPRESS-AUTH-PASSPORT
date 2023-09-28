const { Sequelize, INTEGER, DataTypes } = require("sequelize")

const db_connect = require("./db_connect")

const users = db_connect.define("users",{
    id : {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false 
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }

})
users.sync({alter:true})

module.exports = users


