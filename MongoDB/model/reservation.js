const { Schema, model, Types } = require("mongoose");

const ReservationSchema = new Schema(
  {
    user: { type: Types.ObjectId, required: true, ref: "User" },
    show: { type: Types.ObjectId, required: true, ref: "Show" },
  },
  { timestamp: true }
);

ReservationSchema.virtual("users", {
  ref: "User",
  localField: "_id",
  foreignField: "user",
});

ReservationSchema.virtual("shows", {
  ref: "Show",
  localField: "_id",
  foreignField: "show",
});

ReservationSchema.set("toObject", { virtuals: true });
ReservationSchema.set("toJSON", { virtuals: true });

const Reservation = model("Reservation", ReservationSchema);
module.exports = { Reservation };
