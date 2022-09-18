const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");

const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  // check if user exists
  if (!user) {
    res.status(400);
    throw new Error("User not found!");
  }

  // return the user details
  res.status(200);
  res.json({
    id: user.id,
    email: user.email,
  });
});

module.exports = getMe;
