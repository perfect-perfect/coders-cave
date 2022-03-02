const sequelize = require("../config/connection");
const { Model, DataTypes } = require('sequelize')

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoInrement: true,
            allowNull: false
        },
        username: {
            id: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true;
        name: 
    }
)
