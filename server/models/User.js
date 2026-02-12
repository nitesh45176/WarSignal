const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  infantry: { type: Number, default: 100 },
  tanks: { type: Number, default: 10 },
  airUnits: { type: Number, default: 5 },
  budget: { type: Number, default: 10000 },
  missionsCompleted: { type: Number, default: 0 }
});

module.exports = mongoose.model("User", userSchema);
