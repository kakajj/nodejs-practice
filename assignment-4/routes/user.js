const express = require("express");

const router = express.Router();

const userList = [];

router.get("/", (req, res, next) => {
  res.render("index", { docTitle: "Welcome" });
});

router.get("/users", (req, res, next) => {
  res.render("user", { docTitle: "Users", users: userList });
});

router.post("/createUser", (req, res, next) => {
  userList.push({ title: req.body.fname });
  res.render("user", { docTitle: "Users", users: userList });
});

module.exports = router;
