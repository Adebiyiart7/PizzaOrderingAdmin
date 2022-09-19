const asyncHandler = require("express-async-handler");
const Product = require("../../models/productModel");

/**
 * @desc    Get all products
 * @route   GET api/products
 * @access  Public
 */
const getProduct = asyncHandler(async (req, res) => {
  let query = { available: true };
  try {
    let products = await Product.find(query, {
      price: 1,
      category: 1,
      available: 1,
      displayImage: 1,
      description: 1,
      description: 1,
      rating: 1,
    });

    res.status(200);
    res.json(products);
  } catch (error) {
    res.status(400);
    throw new Error("Unable to query products.");
  }
});

module.exports = getProduct;
