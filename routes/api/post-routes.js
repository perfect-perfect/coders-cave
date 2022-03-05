const router = require("express").Router();
const { cp } = require("fs");
const { userInfo } = require("os");
const sequelize = require("../../config/connection");
const { Post, User, Comment, Vote } = require("../../models");

// post route go here
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["title", "post_url", "user_id"],
    order: [["created_at", "DESC"]],
    include: {
      model: Comment,
      attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {},
      ],
    },
  }).then((postData) => {});
});

module.exports = router;
