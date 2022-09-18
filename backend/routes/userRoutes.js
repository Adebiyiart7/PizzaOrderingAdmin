const express = require("express");
const registerUser = require("../controllers/userControllers/registerUser");
const router = express.Router();

router.post("/register", registerUser); // register route
router.post("/login"); // login route

module.exports = router;
