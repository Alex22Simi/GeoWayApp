const mongoose = require("mongoose");

const mesajSchema = new mongoose.Schema({
  deLa: { type: String },
  pentru: { type: String },
  titlu: { type: String },
  cerere: { type: String },
  data: { type: String },
  status: { type: String },
});

const Mesaj = mongoose.model("Mesaj", mesajSchema);
module.exports = Mesaj;
