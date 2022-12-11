const http = require("http");
const routes = require("./01-routes");

//* every request incoming to the server
//* will executes this func. (event-driven arch.)

//* declare a variable for our sever
const server = http.createServer(routes.handler);

//* run the server
server.listen(3000);
