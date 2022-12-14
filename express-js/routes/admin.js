const express = require("express");

const path = require("path");

const router = express.Router();

const rootDir = require("../utils/path");

router.get("/add-product", (req, res, next) => {
  // console.log("In another middleware!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  // console.log("In another middleware!");
  console.log(req.body);
  const title = req.body.title;
  res.send(`<h1>This is Title: ${title}</h1>`);
});

module.exports = router;
