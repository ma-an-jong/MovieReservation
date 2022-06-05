const { Schema, model, Types } = require("mongoose");

const MovieSchema = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    genre: { type: String, require: true },
    release_date: { type: Date, require: true },
    runtime: { type: Number, require: true },
    GPA: { type: Number, default: 0 },
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

const Movie = model("Movie", MovieSchema);
module.exports = { Movie };
