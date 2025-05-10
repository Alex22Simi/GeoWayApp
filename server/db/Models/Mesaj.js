const mongoose = require("mongoose");

const mesajSchema = new mongoose.Schema({
  deLa: { type: String, ref: "User" },
  deLaNume: { type: String },
  pentru: { type: String, ref: "User" },
  titlu: { type: String },
  cerere: { type: String },
  data: { type: String },
  status: { type: String },
  raspunsPentru: { type: mongoose.Schema.ObjectId, ref: "Mesaj" },
});

const Mesaj = mongoose.model("Mesaj", mesajSchema);
module.exports = Mesaj;
