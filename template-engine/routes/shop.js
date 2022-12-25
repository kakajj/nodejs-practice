const express = require("express");

const path = require("path");

// const rootDir = require("../utils/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    path: "",
    hasProduct: products.length > 0,
    activeShop: true,
    productCSS: true,
    // layout: false,
  });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
