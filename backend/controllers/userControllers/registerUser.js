const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const generateToken = require("../utilities/generateToken");

// @desc    Register a new user
// @route   POST api/user/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // get user input
  const { email, password } = req.body;

  // validate input
  if (!email && !password) {
    res.status(400);
    throw new Error("Make sure  you fill all fields!");
  }

  // check if user already exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist!");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    email: email,
    password: hashPassword,
  });

  res.status(200);
  res.json({
    token: generateToken(user.id), // return the token
  });
});

module.exports = registerUser;
