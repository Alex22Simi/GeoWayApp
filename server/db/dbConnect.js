const mongoose = require("mongoose");
const Examen = require("./Models/Examen.js");

// const conectare = async () => {
mongoose.connect(process.env.URI);
// }

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Conectat la MongoDB!");
});

db.on("error", (err) => {
  console.log("Eroare MongoDB!", err);
});

db.on("disconnected", () => {
  console.log("Deconectat de la MongoDB");
});

module.exports = { db };
