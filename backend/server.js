const express = require("express");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const router = require("./routes/userRoutes");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

// routes
app.use("/api/user", require("./routes/userRoutes"));

// error middleware
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));

/**
 *
 * Initialize a Node Application
 * Create Database Models
 * User controller
 */
