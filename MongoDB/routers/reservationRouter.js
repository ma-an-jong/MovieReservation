const express = require("express");
const router = express.Router();
const { Reservation } = require("../model/reservation");

router.post("/reservation", async (req, res) => {
  const reservation = new Reservation(req.body);
  await reservation.save();
  return res.send({ reservation });
});

module.exports = router;
