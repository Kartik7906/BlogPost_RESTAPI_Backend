import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogrouter from "./routes/blog-routes.js";

const app = express();

app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogrouter);

mongoose
  .connect("mongodb+srv://kartikvam799:admin123790@cluster0.dpilv.mongodb.net/")
  .then(() =>
    app.listen(5000, () => {
      console.log(
        "Server is running, Now go localhost on the port number: ",
        5000
      );
    })
  )
  .then(() => console.log("connected to the database and listening"))
  .catch((err) => console.log(err));
