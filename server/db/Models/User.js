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
  calePoza: { type: String },
  progres: {
    lectiiFinalizate: {
      romania: {
        lectii: [{
          indexCapitol: Number,
          indexLectie: Number,
          punctajQuizz: Number,
          finalizatQuizz: Boolean,
          nume: String
        }],
        quizzMare: {
          punctaj: Number
        }
      },
      europa: [{
        indexCapitol: Number,
        indexLectie: Number,
        punctajQuizz: Number,
        finalizatQuizz: Boolean,
        nume: String
      }],
      quizzMare: {
        punctaj: Number
      }
    },
    examene: [{
      an: String,
      tip: String,
      punctaj: Number
    }],
    harti: [{
      nume: String,
      faraGreseli: Boolean,
      unitate: String
    }],
    accessLog: [
      String
    ],
    badgeuri: [
      { type: mongoose.Schema.ObjectId, ref: "Badge" }
    ]
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
