const sequelize = require("../config/connection"); // not yet written
const { Model, DataTypes } = require("sequelize");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    comment_text: {
      type: DataType.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        id: "id",
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "post",
        id: "id",
      },
    },
  },
  {
    sequelize,
    timeStamps: false,
    underscored: true,
    name: "comment",
  }
);

module.exports = Comment;