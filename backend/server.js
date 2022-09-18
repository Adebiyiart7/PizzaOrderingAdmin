const express = require("express");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

// error middleware
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));

/**
 *
 * Initialize a Node Application
 * Create Database Models
 * User controller
 */
