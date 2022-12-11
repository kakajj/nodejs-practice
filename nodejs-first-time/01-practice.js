const http = require("http");
const routes = require("./01-practice-routes");

const server = http.createServer(routes.handler);

server.listen(3000);
