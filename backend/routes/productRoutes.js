const express = require("express");
const addProduct = require("../controllers/productControllers/addProduct");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

// addProduct and getProduct route
router.route("/add").post(protect, addProduct);

module.exports = router;
