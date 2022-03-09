const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    name: "post",
<<<<<<< HEAD
    freezeTableName: true,
=======
    freezeTableName: true
>>>>>>> 8e28a37f7fd4a3e4b3bb66156d16589562521931
  }
);

module.exports = Post;
