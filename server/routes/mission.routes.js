const { createMission, getMissionHistory } = require("../controller/mission.controller");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();


router.post("/create", authMiddleware, createMission);
router.get("/history", authMiddleware, getMissionHistory);


module.exports = router;
