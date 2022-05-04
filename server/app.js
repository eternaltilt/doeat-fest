require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT ?? 4000;
const loginRouter = require("./routes/login.router");
const logoutRouter = require("./routes/logout.router");
const setsRouter = require("./routes/set.router");
const festivalRouter = require("./routes/festival.router");
const managerFormRouter = require("./routes/managerForm.route");

const config = require("./config/config");

// config
config(app);

// routing
app.use("/admin", loginRouter);
app.use("/sets", setsRouter);
app.use("/logout", logoutRouter);
app.use("/festival", festivalRouter);
app.use("/participate", managerFormRouter);
app.listen(port, () => console.log(`***Server started at ${port} port ***`));
