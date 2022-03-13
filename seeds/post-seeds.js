const { Post } = require("../models");

const postdata = [
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 10,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 8,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 1,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 4,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 7,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 4,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 1,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 1,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 9,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 5,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 3,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 10,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 8,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 3,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 3,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 7,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 6,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 4,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 6,
  },
  {
    title: "This is an sample post.",
    post_url: "github.com/perfect-perfect",
    question: "Why?",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
