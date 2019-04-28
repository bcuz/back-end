const express = require("express");
const helmet = require("helmet");
const server = express();
const router = require("../routes/mainRouter.js");

server.use(express.json());
server.use(helmet());
server.use("/", router);

module.exports = server;
