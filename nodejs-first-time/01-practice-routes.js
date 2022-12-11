const requestHandler = (req, res) => {
  const method = req.method;
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Login</title></head>");
    res.write("<h1>Type Your Username here .</h1>");
    res.write(
      "<body><form action='/create-user' method='post'><input name='username' type='text' /><button type='submit'>ยืนยัน</button></ ></body > "
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>User Lists</title></head>");
    res.write("<h1>List of users!</h1>");
    res.write("<body><ul><li>Users 1</li><li>Users 2</li></ul></body > ");
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method == "POST") {
    const body = [];

    //? work when recieve req chunk
    req.on("data", (chunk) => {
      console.log(chunk);
      if (chunk) {
        body.push(chunk);
      }
    });

    return req.on("end", () => {
      if (body.length > 0) {
        const parsed = Buffer.concat(body).toString();
        const message = parsed.split("=")[1];
        console.log(message);
        res.write("<html>");
        res.write("<head><title>User Lists</title></head>");
        res.write("<h1>Welcome</h1>");
        res.write("<body><ul><li>" + message + "</li></ul></body>");
        res.write("</html>");
        return res.end();
      } else {
        res.write("<html>");
        res.write("<head><title>User Lists</title></head>");
        res.write("<h1>Welcome</h1>");
        res.write("<body><ul><li>Anonymous</li></ul></body>");
        res.write("</html>");
        return res.end();
      }
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page bro</title></head>");
  res.write("<body>Hello from Kakajj </body>");
  res.write("</html>");
  res.end();
};

module.exports = {
  handler: requestHandler,
};
