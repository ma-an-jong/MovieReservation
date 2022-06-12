const express = require("express");
const router = express.Router();
const { Movie } = require("../model/movie");

router.post("/", async (req, res) => {
  const arr = req.body.release_date.split("/");
  const date = new Date(Number(arr[0]), Number(arr[1]), Number(arr[2]));
  req.body.release_date = date;
  const movie = new Movie(req.body);
  await movie.save();
  return res.send({ movie });
});

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.send(movies);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

router.get("/:movieId", async (req, res) => {
  try {
    let { movieId } = req.params;
    const movie = await Movie.findById(movieId);
    res.send(movie);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
