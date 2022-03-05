const sequelize = require("../config/connection"); // this will import the connection once it is built
const { Model, DataTypes } = require("sequelize");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoInrement: true,
      allowNull: false,
    },
    username: {
      id: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    name: "user",
  }
);

module.exports = User;
