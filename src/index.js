// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "../src/db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(`${process.env.PORT || 8000}`, () => {
      console.log(`App is running on port ${[process.env.PORT]}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed", error);
    throw error;
  });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (err) => {
      console.log(err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT || 8000}`);
    });
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
})();

*/
