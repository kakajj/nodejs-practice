const fs = require("fs");
//? process.exit()

const requestHandler = (req, res) => {
  const method = req.method;
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page bro</title></head>");
    res.write(
      "<body><form action='/message' method='post'><input name='message' type='text' /><button type='submit'>Submit</button></ ></body > "
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    //? work when recieve req chunk
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    //? work when finish recieved chunk
    return req.on("end", () => {
      const paresedBody = Buffer.concat(body).toString();
      // console.log(paresedBody);
      const message = paresedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        //* 302 = redirect
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page bro</title></head>");
  res.write("<body>Hello from Kakajj </body>");
  res.write("</html>");
  res.end();
};

//* หรือ module.exports = requestHandler ถ้าอยาก export อย่างเดียว
module.exports = {
  handler: requestHandler,
  someText: "Some Hard Code here",
};
