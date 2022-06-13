const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const hostname = "127.0.0.1";
const port = 8800;

const userRouter = require("./routers/userRouter");
const adminRouter = require("./routers/adminRouter");
const theaterRouter = require("./routers/theaterRouter");
const movieRouter = require("./routers/movieRouter");
const showRouter = require("./routers/showRouter");
const reservationRouter = require("./routers/reservationRouter");
//const gradeRouter = require("./routers/gradeRouter");
const commentRouter = require("./routers/commentRouter");
const likeRouter = require("./routers/likeRouter");

const path = require("path");

const DB_URI = "mongodb://127.0.0.1:27017/MovieReservation";

const server = async () => {
  try {
    await mongoose.connect(DB_URI);
    app.use(express.json());
    app.use(cors({ origin: "http://localhost:3000" }));
    app.use(userRouter);
    app.use(adminRouter);
    app.use("/theater", theaterRouter);
    app.use("/movie", movieRouter);
    app.use("/show", showRouter);
    app.use("/reservation", reservationRouter);
    //app.use("/grade", gradeRouter);
    app.use("/comment", commentRouter);
    app.use(likeRouter);

    app.listen(port, hostname, function () {
      console.log("server is running");
    });
    app.use(express.static(path.join(__dirname, "React/build")));
    app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname, "React/build/index.html"));
    });
  } catch (err) {
    console.log(err);
  }
};

server();
