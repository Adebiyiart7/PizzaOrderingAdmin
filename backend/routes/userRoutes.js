const express = require("express");
const getMe = require("../controllers/userControllers/getMe");
const loginUser = require("../controllers/userControllers/loginUser");
const registerUser = require("../controllers/userControllers/registerUser");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser); // register route
router.post("/login", loginUser); // login route
router.get("/me", protect, getMe); // get me route

module.exports = router;
