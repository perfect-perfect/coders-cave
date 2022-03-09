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
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    name: "user",
<<<<<<< HEAD
    freezeTableName: true,
=======
    freezeTableName: true
>>>>>>> 8e28a37f7fd4a3e4b3bb66156d16589562521931
  }
);

// export
module.exports = User;
