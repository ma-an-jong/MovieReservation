const { response } = require("express");
const express = require("express");
const router = express.Router();
const { Reservation } = require("../model/reservation");
const { Show } = require("../model/show");

router.post("/", async (req, res) => {
  const showId = req.body.show;
  const reservation = new Reservation(req.body);
  await reservation.save();

  return res.send({ reservation });
});

router.put("/:showId", async (req, res) => {
  const { showId } = req.params;
  let show = await Show.findOne({ _id: showId });
  const reservations = show.reservations + 1;

  if (show != null) {
    show = await Show.findByIdAndUpdate(
      showId,
      { reservations: reservations },
      { new: true }
    );
  } else {
    res.status(500).send({ error: "업데이트 실패" });
  }
  return res.send(show);
});

router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find({});
    res.send({ reservations });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

router.get("/totalReservation/:showId", async (req, res) => {
  try {
    let { showId } = req.params;
    const reservations = await Reservation.find({ show: showId });

    res.send({ remain: reservations.length });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
