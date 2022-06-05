const express = require("express");
const router = express.Router();
const { Movie } = require("../model/movie");

router.post("/movie", async (req, res) => {
  const arr = req.body.release_date.split("/");
  const date = new Date(Number(arr[0]), Number(arr[1]), Number(arr[2]));
  req.body.release_date = date;
  const movie = new Movie(req.body);
  await movie.save();
  return res.send({ movie });
});

module.exports = router;
