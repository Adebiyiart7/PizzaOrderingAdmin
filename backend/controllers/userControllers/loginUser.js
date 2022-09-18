const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../../models/userModel");
const generateToken = require("../../utilities/generateToken");
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // check if inputs are empty
  if (!email && !password) {
    res.status(400);
    throw new Error("Make sure you fill in all fields!");
  }

  // check if user exist
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200);
    res.json({
      token: generateToken(user.id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials!");
  }
});

module.exports = loginUser;
