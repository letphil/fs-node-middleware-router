import express from "express";
import dotenv from "dotenv";

import { addTimestamp, verifyToken } from "./middlewares/index.js";
import router from "./routes/index.js";

// setting up env variables from .env file
dotenv.config();
// setting PORT to the variable set in .env file
const PORT = process.env.PORT || 8888;

// instantiating express() into app variable -> only need to instantiate once
const app = express();

// middlewares
app.use(addTimestamp); // handling adding .timestamp to req object
app.use(express.json()); // handles being able to use .body in req object in post request
app.use("/views", express.static("public")); // handles putting static files in /views routes
app.use("/api", router); // putting api routes here from 'routes' directory

// healthcheck
app.get("/health", function (req, res) {
  // console.log(req);
  res.send({
    checkedHealthAt: req.timestamp,
    msg: "OK",
  });
});

// setting callback to show app is listening on port and persisting
app.listen(PORT, function () {
  console.log("server running on port:", PORT);
});
