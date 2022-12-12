const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
//* การทำงานจะทำจาก บน ลง ล่าง ดังนั้น เจอ route ไหน ทำอันนั้นก่อนเสมอ

app.use(shopRoutes);
app.use("/admin", adminRoutes);

//* Handler 404 error
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
