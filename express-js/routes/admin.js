const express = require("express");

const path = require("path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  // console.log("In another middleware!");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  // console.log("In another middleware!");
  console.log(req.body);
  const title = req.body.title;
  res.send(`<h1>This is Title: ${title}</h1>`);
});

module.exports = router;
