const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
//* การทำงานจะทำจาก บน ลง ล่าง ดังนั้น เจอ route ไหน ทำอันนั้นก่อนเสมอ

app.use(shopRoutes);
app.use("/admin", adminData.routes);

//* Handler 404 error
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);