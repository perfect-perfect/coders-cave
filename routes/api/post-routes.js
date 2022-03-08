const router = require("express").Router();
<<<<<<< HEAD
=======
const { cp } = require("fs");
const { userInfo } = require("os");
>>>>>>> 6755fa154798783bcd2805d94e36f5761225a93d
const sequelize = require("../../config/connection");
const { Post, User, Comment, Vote } = require("../../models");

// post route go here
router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["title", "post_url", "user_id"],
    order: [["created_at", "DESC"]],
<<<<<<< HEAD
    include: [
      {
        model: "user",
        attributes: ["username"],
      },
    ],
  });
=======
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
>>>>>>> 6755fa154798783bcd2805d94e36f5761225a93d
});

module.exports = router;
