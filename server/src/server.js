const express = require("express");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = server;
