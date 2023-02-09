const http = require('http');
// const port = process.env.PORT || 3000;
require("dotenv").config({path:"./.env"})

// const dotenv = require('dotenv')
// dotenv.config()

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Azure!\n'
  res.end(msg);
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}/`);
});
