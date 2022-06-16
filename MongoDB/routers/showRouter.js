const express = require("express");
const router = express.Router();
const { Show } = require("../model/show");
const { Reservation } = require("../model/reservation");

router.post("/", async (req, res) => {
  const arr = req.body.time.split("/");
  const date = new Date(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
  req.body.time = date;
  const show = new Show(req.body);
  await show.save();
  return res.send({ show });
});

router.get("/", async (req, res) => {
  try {
    const shows = await Show.find({}).populate({ path: "movie" });
    return res.send(shows);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

router.get("/:movieId", async (req, res) => {
  try {
    const { movieId } = req.params;
    const shows = await Show.find({ movie: movieId }).populate({
      path: "movie",
    });
    return res.send(shows);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
