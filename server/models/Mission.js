const mongoose = require("mongoose");

const missionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  missionType: String,
  infantryUsed: Number,
  tanksUsed: Number,
  airUnitsUsed: Number,
  result: String,
  casualties: Number,
  reward: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Mission", missionSchema);
