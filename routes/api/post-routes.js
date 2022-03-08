const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Vote } = require("../../models");

// post route go here
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["title", "post_url", "user_id"],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: "user",
        attributes: ["username"],
      },
    ],
  });
});

module.exports = router;
