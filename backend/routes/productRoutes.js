const express = require("express");
const addProduct = require("../controllers/productControllers/addProduct");
const getProduct = require("../controllers/productControllers/getProducts");
const updateProduct = require("../controllers/productControllers/updateProduct");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(getProduct); // getProduct route
router.route("/add").post(protect, addProduct); // addProduct route
router.route("/update/:id").put(protect, updateProduct); // updateProduct route

module.exports = router;
