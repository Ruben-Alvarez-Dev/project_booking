const http = require("node:http");
const { findAvailablePort } = require("./free-http.js");

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.end("Hello World");
});

findAvailablePort(3005).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
});
