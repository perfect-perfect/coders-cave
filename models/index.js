//imported models
const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");

//associations
User.hasMany(Post, {
  foreignKey: "user_id", //change once determined what we are calling them
});

Post.belongsTo(User, {
  foreignKey: "user_id", //change once determined what we are calling them
  onDelete: "SET NULL",
});

Comment.belongsTo(User, {
  foreignKey: "user_id", //change once determined what we are calling them
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id", //change once determined what we are calling them
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id", //change once determined what we are calling them
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id", //change once determined what we are calling them
});

module.exports = { User, Post, Comment };
