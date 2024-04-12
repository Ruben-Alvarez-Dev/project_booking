const http = require("node:http");
const fs = require("node:fs");

const desiredPort = process.env.PORT ?? 1234;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.statusCode = 200;

  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/Photo.jpg") {
    fs.readFile("./Photo.jpg", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h1>Internal Server Error</h1>");
      } else {
        res.setHeader("Content-Type", "image/jpg");
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Page</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Page Not Found</h1>");
  }
};
const server = http.createServer(processRequest);

server.listen(desiredPort, () => {
  console.log(`Server is running on port: , ${desiredPort}`);
});
