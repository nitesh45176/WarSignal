const Mission = require("../models/Mission");
const User = require("../models/User");
const { calculateMission } = require("../utils/missionLogic");

exports.createMission = async (req, res) => {
  try {
    const { missionType, infantry, tanks, airUnits } = req.body;

    const user = await User.findById(req.userId);

    if (
      infantry > user.infantry ||
      tanks > user.tanks ||
      airUnits > user.airUnits
    ) {
      return res.status(400).json({ message: "Not enough resources" });
    }

    const { result, casualties, reward } =
      calculateMission(missionType, infantry, tanks, airUnits);

    // AI Advisor Logic
    let advice = "Balanced strategy.";

    if (missionType === "Surveillance" && tanks > 5) {
      advice =
        "Too many tanks for surveillance. Consider lighter deployment.";
    }

    if (infantry < 20) {
      advice =
        "Low infantry count. Reinforce troops before risky missions.";
    }

    // Update user
    user.infantry -= casualties;
    user.tanks -= tanks;
    user.airUnits -= airUnits;
    user.budget += reward;
    user.missionsCompleted += 1;

    await user.save();

    const mission = await Mission.create({
      userId: user._id,
      missionType,
      infantryUsed: infantry,
      tanksUsed: tanks,
      airUnitsUsed: airUnits,
      result,
      casualties,
      reward
    });

    res.json({ mission, advice });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMissionHistory = async (req, res) => {
  try {
    const missions = await Mission.find({ userId: req.userId })
      .sort({ createdAt: -1 });

    res.json(missions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
