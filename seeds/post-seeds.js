const { Post } = require("../models/Post");

const postData = [
  {
    title: "post1",
    post_url: "localhost3001/posts/1",
  },
  {
    title: "post",
    post_url: "localhost3001/posts/2",
  },
  {
    title: "post",
    post_url: "localhost3001/posts/3",
  },
  {
    title: "post",
    post_url: "localhost3001/posts/4",
  },
  {
    title: "post",
    post_url: "localhost3001/posts/5",
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
