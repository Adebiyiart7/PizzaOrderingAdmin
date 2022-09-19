const express = require("express");
const addProduct = require("../controllers/productControllers/addProduct");
const getProduct = require("../controllers/productControllers/getProducts");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(getProduct); // getProduct route
router.route("/add").post(protect, addProduct); // addProduct route

module.exports = router;
