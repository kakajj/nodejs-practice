const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

router.get("/users", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../", "views", "users.html"));
});

module.exports = router;
