const { Schema, model, Types } = require("mongoose");

const UserSchema = new Schema(
  {
    login_id: { type: String, required: true },
    password: { type: String, required: true },
    user_name: { type: String, required: true },
  },
  { timestamp: true }
);

const User = model("User", UserSchema);
module.exports = { User };
