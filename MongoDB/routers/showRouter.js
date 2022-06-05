const express = require("express");
const router = express.Router();
const { Show } = require("../model/show");

router.post("/show", async (req, res) => {
  const arr = req.body.time.split("/");
  const date = new Date(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]);
  req.body.time = date;
  const show = new Show(req.body);
  await show.save();
  return res.send({ show });
});

module.exports = router;
