import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import apiRoutes from "./routes/api/index.js";

dotenv.config();

const PORT = process.env.PORT || 8888;

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use((req, res, next) => {
  if (!req.body) req.body = {};
  const now = new Date().toISOString();
  req.body.createdAt = now;
  req.body.updatedAt = now;
  req.body.deletedAt = null;
  next();
});

// routes
app.use("/api", apiRoutes);

function verifyToken(req, res, next) {
  if (!req.headers.authorization) return next();
  const token = req.headers.authorization.replace("Bearer ", "");
  if (token !== "cool-mentees") return res.status(401).send("UNAUTHORIZED");
  next();
}

// healthcheck
app.get("/health", function (req, res, next) {
  res.send("OK");
});

app.listen(PORT, function () {
  console.log("server running on port:", PORT);
});

// function User(name, age, createdAt, updatedAt, deletedAt) {
//   this.name = name;
//   this.age = age;
//   this.createdAt = createdAt;
//   this.updatedAt = updatedAt;
//   this.deletedAt = deletedAt;
// }

// app.post("/users", function (req, res) {
//   const user = req.body;
//   const name = user.name;
//   const age = user.age;
//   const createdAt = user.createdAt;
//   const updatedAt = user.updatedAt;
//   const deletedAt = user.deletedAt;

//   const newUser = new User(name, age, createdAt, updatedAt, deletedAt);
//   fs.writeFileSync("./data/users/1.json", JSON.stringify(newUser));
//   res.send({
//     msg: "CREATED USER",
//     data: newUser,
//   });
// });
