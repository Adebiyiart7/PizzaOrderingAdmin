const asyncHandler = require("express-async-handler");
const Product = require("../../models/productModel");
const addProductValidator = require("../../utilities/validators/addProductValidator");

const addProduct = asyncHandler(async (req, res) => {
  // get all input
  let { name, price, category, displayImage, images, description } = req.body;

  // check if user is an admin
  if (req.user.isAdmin === true) {
    // call the validator function
    addProductValidator(name, price, category, displayImage, description, res);

    if (!images) {
      images = [];
    }

    const product = await Product.create({
      name: name,
      price: price,
      category: category,
      displayImage: displayImage,
      images: images,
      description: description,
    });

    res.status(200);
    res.json(product);
  } else {
    res.status(200);
    throw new Error("You do not have permission to add a product!");
  }
});

module.exports = addProduct;
