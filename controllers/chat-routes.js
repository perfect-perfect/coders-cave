const router = require("express").Router();
const { Chat } = require("../models/Chat-Comments");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  Chat.findAll({
    attributes: ["username", "content"],
  }).then((chatData) => {
    const chatPosts = chatData.map((post) => post.get({ plain: true }));
    res.render("chat", posts);
  });
});
