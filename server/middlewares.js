const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const verificareToken = (req, res, next) => {
  const token = req.headers.jwt;
  jwt.verify(token, JWT_SECRET_KEY, (err, parsat) => {
    if (err) {
      return res.status(401).json("Token invalid");
    }

    req.verificat = parsat;
    next();
  });
};

module.exports = { verificareToken };
