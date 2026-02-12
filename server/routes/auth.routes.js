const { registerUser, loginUser } = require("../controller/auth.controller");
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
});

module.exports = router;
