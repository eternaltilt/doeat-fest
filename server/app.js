require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT ?? 3000;
// const userRouter = require("./routes/user.router");
const managerFormRouter = require('./routes/managerForm.route');
const festivalRouter = require("./routes/festival.route")
const config = require("./config/config");

// config
config(app);

// routing
// app.use("/", userRouter);
app.use('/participate', managerFormRouter);
app.use('/festivals', festivalRouter);
app.listen(port, () => console.log(`***Server started at ${port} port ***`));
