const express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "My Express App", message: "hello" });
});

module.exports = router;
