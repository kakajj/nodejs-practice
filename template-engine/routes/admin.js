const express = require("express");

const path = require("path");

const router = express.Router();

const rootDir = require("../utils/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  // console.log("In another middleware!");
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  // console.log("In another middleware!");
  products.push({ title: req.body.title });
  res.render("shop", {
    prods: products,
    docTitle: "Shop",
    hasProduct: true,
    productCSS: true,
    path: "",
  });
});

exports.routes = router;
exports.products = products;
