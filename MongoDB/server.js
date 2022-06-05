const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hostname = "127.0.0.1";
const port = 3000;

const userRouter = require("./routers/userRouter");
const adminRouter = require("./routers/adminRouter");
const theaterRouter = require("./routers/theaterRouter");
const movieRouter = require("./routers/movieRouter");
const showRouter = require("./routers/showRouter");
const reservationRouter = require("./routers/reservationRouter");
const gradeRouter = require("./routers/gradeRouter");
const commentRouter = require("./routers/commentRouter");
const likeRouter = require("./routers/likeRouter");

const DB_URI = "mongodb://127.0.0.1:27017/MovieReservation";

const server = async () => {
  try {
    await mongoose.connect(DB_URI);
    app.use(express.json());
    app.use(userRouter);
    app.use(adminRouter);
    app.use(theaterRouter);
    app.use(movieRouter);
    app.use(showRouter);
    app.use(reservationRouter);
    app.use(gradeRouter);
    app.use(commentRouter);
    app.use(likeRouter);
    app.listen(port, hostname, function () {
      console.log("server is running");
    });
  } catch (err) {
    console.log(err);
  }
};

server();
