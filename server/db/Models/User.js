const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String },
  nume: { type: String },
  pass_hash: { type: String },
  elev: { type: Boolean },
  codResetare: {
    cod: { type: Number },
    exp: { type: Date },
  },
  descriere: { type: String },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
