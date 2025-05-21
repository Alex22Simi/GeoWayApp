const mongoose = require("mongoose");

const badgeSchema = new mongoose.Schema({
    nume: String,
    descriere: String,
    caleImagine: String
});

const Badge = mongoose.model("Badge", badgeSchema);
module.exports = Badge;
