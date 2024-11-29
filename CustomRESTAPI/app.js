import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";

const app = express();

// fetching router:
app.use("/api/user", router);

// connecting mongodb by using mongooose:
mongoose
  .connect(
    
  )
  .then(() => app.listen(3000))
  .then(() => {
    console.log("Connected To DataBase and Listening to localHost 3000:");
  })
  .catch((err) => console.log(err));

// yjkiOIbT0WYFO3Rs mongodb passward:
