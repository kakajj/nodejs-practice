const express = require("express");
const app = express();
const path = require("path");
// * routers
const shopRouter = require("./routes/shop");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "utils")));

app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).send({ error: "404 Not Found" });
});

app.listen(3000);
