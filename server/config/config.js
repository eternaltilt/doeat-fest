const express = require("express");
const cors = require('cors')
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sessionConfig = require("./sessionConfig");
const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
  optionSuccessStatus: 200,
};

const config = (app) => {
  app.use(session(sessionConfig));
  app.use(cors(corsOptions))
  app.use(cookieParser());

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

module.exports = config;
