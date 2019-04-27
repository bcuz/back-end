const express = require("express");
const helmet = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet())

// server.use("/", );

// server.get("/", async (req, res) => {
//   res.send("Hello");
// });

module.exports = server;
