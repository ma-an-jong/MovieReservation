const express = require("express");
const router = express.Router();
const { Theater } = require("../model/theater");

router.post("/", async (req, res) => {
  const theater = new Theater(req.body);
  await theater.save();
  return res.send({ theater });
});

router.get("/:floor", async (req, res) => {
  try {
    let { floor } = req.params;

    const theater = await Theater.find({
      floor: floor,
    });

    res.send(theater);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

router.get("/:floor/:seat", async (req, res) => {
  try {
    let { floor, seat } = req.params;

    const theater = await Theater.find({
      floor: floor,
      seat: seat,
    });

    res.send(theater);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
