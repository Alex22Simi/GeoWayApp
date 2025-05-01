const mongoose = require("mongoose");

const examenSchema = new mongoose.Schema({
  an: Number,
  subiecte: [
    {
      tip: String,
      nume: String,
      info: String,
      puncte: [
        {
          cerinta: { type: String },
          imagine: { type: String },
          subpuncte: [
            {
              type: Map,
              of: {
                cerinta: { type: String },
                intrebari: [
                  {
                    intrebare: { type: String },
                    optiuni: [String],
                    raspunsuri: [String],
                    tip: { type: String },
                    punctaj: { type: Number },
                    imagine: { type: String, default: "" },
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  ],
});

const Examen = mongoose.model("Examen", examenSchema);
module.exports = Examen;
