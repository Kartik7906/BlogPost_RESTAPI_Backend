import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user-routes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/user", router);

// Validate environment variables
if (!process.env.MONGODB_URI) {
  console.error("Error: MONGODB_URI is not defined in .env");
  process.exit(1);
}

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => console.log("Server is running on localhost:3000"));
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });
