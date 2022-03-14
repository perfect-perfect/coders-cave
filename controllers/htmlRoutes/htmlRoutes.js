const router = require("express").Router();
const path = require("path");

router.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/chat/index.html"));
});

module.exports = router;
