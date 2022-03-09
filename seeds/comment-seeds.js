const { Comment } = require("../models/Comment");

const commentData = [
  {
    comment_text: "this is a post",
  },
  {
    comment_text: "this is a post",
  },
  {
    comment_text: "this is a post",
  },
  {
    comment_text: "this is a post",
  },
  {
    comment_text: "this is a post",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
