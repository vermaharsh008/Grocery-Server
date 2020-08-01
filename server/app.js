// Import Statements
const express = require("express");
const mongoose = require("mongoose"); // Used to communicate with MongoDB
const morgan = require("morgan"); // Logger Middleware - logs every request made to the server

// Import Routes
const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/item");
const receiptRoutes = require("./routes/receipt");
const userRoutes = require("./routes/user");
const inventoryRoutes = require("./routes/inventory");
const docsRoutes = require("./routes/docs");

// Environment Values
require("dotenv").config();

const app = express(); // Initializing express as app variable

//Database Configuration
// Change in Mongoose. Code taken from documentation to suppress warning
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json()); //Used to parse JSON bodies (Body Parser)
app.use(morgan("dev"));

// Routes Middleware
app.use("/api", authRoutes);
app.use("/api", receiptRoutes);
app.use("/api", itemRoutes);
app.use("/api", userRoutes);
app.use("/api", inventoryRoutes);
app.use("/api", docsRoutes);

// Listening on the variable PORT in the .env file or 8000 incase PORT is not available (only dev case)
const port = process.env.PORT || 8800;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
