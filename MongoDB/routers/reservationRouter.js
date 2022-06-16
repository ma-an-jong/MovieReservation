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

router.post("/reservationShow", async (req, res) => {
  const { context } = req.body;
  for (let i = 0; i < context.length; i++) {
    const reservation = new Reservation(context[i]);
    await reservation.save();
  }

  return res.send({ context });
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

router.get("/:showId", async (req, res) => {
  const { showId } = req.params;
  console.log(showId);
  let show = await Reservation.find({ show: showId }).populate({
    path: "theater",
  });

  return res.send(show);
});

router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find({})
      .populate({ path: "user" })
      .populate({ path: "theater" })
      .populate({ path: "show" });
    res.send({ reservations });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const reservations = await Reservation.find({ user: userId })
      .populate({ path: "theater" })
      .populate({
        path: "show",
        populate: {
          path: "movie",
        },
      });
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

router.get("/totalReservation", async (req, res) => {
  try {
    const reservations = await Reservation.find({});

    res.send({ remain: reservations.length });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

router.delete("/:reservationId", async (req, res) => {
  try {
    const { reservationId } = req.params;

    const reservation = await Reservation.findById(reservationId);

    if (!reservation) return res.status(404).send("reservation not found");

    await Reservation.deleteOne({ _id: reservationId });

    res.send({ reservation });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
