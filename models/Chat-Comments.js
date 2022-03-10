const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Chat extends Model {}

Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.INTEGER,
      allowNull: false,
      include: {
        model: "user",
        key: "username",
      },
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      include: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    tableName: "chat",
    underscored: true,
  }
);
