const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { errorMiddleware } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

// connect database
connectDB();

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

// error middleware
app.use(errorMiddleware);

app.listen(port, () => console.log(`Server running on port ${port}`));

/**
 *
 * Initialize a Node Application
 * Create Database Models
 * User controller; Register user, login user, get me
 * Added authMiddleware for protected routes
 *
 * Get Products
 * Add Product, check if user is an admin
 * Update Product, check if user is an admin
 * Delete Product, check if user is an admin
 *
 */
