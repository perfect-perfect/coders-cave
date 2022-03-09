// import all models
const User = require("./User");
const Post = require("./Post");
const Vote = require("./Vote");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  //as: "posting_user",
  onDelete: "SET NULL",
});

Vote.belongsTo(User, {
  foreignKey: "user_id",
  as: "voting_user",
  onDelete: "SET NULL",
});

Vote.belongsTo(Post, {
  foreignKey: "post_id",
  as: "voted_posts",
  onDelete: "SET NULL",
});

User.hasMany(Vote, {
  foreignKey: "user_id",
  as: "user_votes"
});

Post.hasMany(Vote, {
  foreignKey: "post_id",
  as: "post_votes"
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  as: "user_comments",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  as: "post_comments",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  as: "user_comments",
  onDelete: "SET NULL",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  as: "post_comments"
});

module.exports = { User, Post, Vote, Comment };
