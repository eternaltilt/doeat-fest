require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT ?? 4000;
const morgan = require('morgan')
const loginRouter = require("./routes/login.router");
const logoutRouter = require("./routes/logout.router");
const setsRouter = require("./routes/set.router");
const festivalRouter = require("./routes/festival.router");
const managerFormRouter = require("./routes/managerForm.route");
const managerRouter = require("./routes/managerRouter.routes");
const restaurantRouter = require('./routes/restaurant.router');
const commentsRouter = require('./routes/comments.routes');
const picturesRouter = require('./routes/pictures.route');

const path = require("path");

const config = require("./config/config");

// config
config(app);

// routing
app.use(morgan('dev'))

app.use("/admin", loginRouter);
app.use("/manager", managerRouter);
app.use("/sets", setsRouter);
app.use("/logout", logoutRouter);
app.use("/festival", festivalRouter);
app.use("/participate", managerFormRouter);
app.use('/restaurantCards', restaurantRouter);
app.use('/comments', commentsRouter);
app.use('/pictures', picturesRouter);

app.listen(port, () => console.log(`***Server started at ${port} port ***`));
