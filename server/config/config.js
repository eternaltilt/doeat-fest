const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sessionConfig = require("./sessionConfig");

const config = (app) => {
  app.use(session(sessionConfig));
  app.use(cookieParser());

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
};

module.exports = config;
