const { Schema, model, Types } = require("mongoose");

const TheaterSchema = new Schema(
  {
    floor: { type: Number, required: true },
    seat: { type: Number, required: true },
  },
  { timestamp: true }
);

// MovieSchema.virtual("comments", {
//   ref: "Comment",
//   localField: "_id",
//   foreignField: "blog",
// });

// MovieSchema.set("toObject", { virtuals: true });
// MovieSchema.set("toJSON", { virtuals: true });

const Theater = model("Theater", TheaterSchema);
module.exports = { Theater };
