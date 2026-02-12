const difficultyMap = {
  "Border Defense": 40,
  "City Capture": 80,
  "Rescue Operation": 60,
  "Surveillance": 30
};

function calculateMission(missionType, infantry, tanks, airUnits) {
  const difficulty = difficultyMap[missionType];

  if (!difficulty) {
    throw new Error("Invalid mission type");
  }

  const infantryNum = Number(infantry);
  const tanksNum = Number(tanks);
  const airUnitsNum = Number(airUnits);

  const power =
    infantryNum * 1 +
    tanksNum * 5 +
    airUnitsNum * 8;

  const threshold = difficulty * 3;

  const successChance = Math.min(
    95,
    Math.floor((power / threshold) * 100)
  );

  const random = Math.random() * 100;

  const result =
    random < successChance ? "Success" : "Failure";

  const casualties =
    result === "Success"
      ? Math.floor(infantryNum * 0.1)
      : Math.floor(infantryNum * 0.25);

  const reward =
    result === "Success"
      ? difficulty * 200
      : 0;

  return { result, casualties, reward, successChance };
}

module.exports = { calculateMission };
