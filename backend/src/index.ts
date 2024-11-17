import dotenv from "dotenv";
import { app } from "./app.js";
import dbConnect from "./db/dbConnect.js";

dotenv.config({
  path: `./.env`,
});

dbConnect()
  .then(() => {
    console.log("DB connection successful");
    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.error("Server error:", error);
      process.exit(1); // Exit with an error code to indicate failure.
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit with an error code to indicate failure.
  });