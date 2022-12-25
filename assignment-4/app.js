const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

const userRoute = require("./routes/user");

app.use(userRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "Error: Not Found" });
});

app.listen(3000);
