const router = require("express").Router();
const { cp } = require("fs");
const { userInfo } = require("os");
const sequelize = require("../../config/connection");
const { Post, User, Comment, Vote } = require("../../models");
const withAuth = require("../../utils/auth");

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
      ],
    },
  }).then((postData) => {
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("homepage", posts);
  });
});

router.post("/", withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    post_id: req.body.post_id,
    user_id: req.body.user_id,
  })
    .then((postData) => {
      res.json(postData);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((postData) => {
      res.json(postData);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ message: err });
    });
});

module.exports = router;
