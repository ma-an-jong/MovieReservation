const { Schema, model, Types } = require("mongoose");

const ShowSchema = new Schema(
  {
    time: { type: Date, required: true },
    screening_grade: { type: Number, required: true },
    movie: { type: Types.ObjectId, required: true, ref: "Movie" },
    floor: { type: Number, required: true },
    reservations: { type: Number, default: 0 },
  },
  { timestamp: true }
);

ShowSchema.virtual("movies", {
  ref: "Movie",
  localField: "_id",
  foreignField: "movie",
});

ShowSchema.virtual("theaters", {
  ref: "Theater",
  localField: "_id",
  foreignField: "theater",
});

ShowSchema.set("toObject", { virtuals: true });
ShowSchema.set("toJSON", { virtuals: true });

const Show = model("Show", ShowSchema);
module.exports = { Show };
