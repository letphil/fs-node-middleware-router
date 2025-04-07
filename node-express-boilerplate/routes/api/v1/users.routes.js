import { Router } from "express";
import fs from "fs";

const v1UsersRouter = Router();

// list or get endpoint
v1UsersRouter.get("{/:userId}", function (req, res) {
  const userId = req.params.userId;
  if (userId) {
    const user = fs.readFileSync(`./data/users/${userId}.json`, "utf8");
    return res.send(JSON.parse(user));
  }
  console.log(userId);
  res.send("LIST USERS");
});

// create endpoint
v1UsersRouter.post("/", function (req, res) {
  res.send("CREATE USERS");
});

// update endpoint
v1UsersRouter.put("/:userId", function (req, res) {
  res.send("UPDATE USERS");
});

// delete endpoint
v1UsersRouter.delete("/:userId", function (req, res) {
  res.send("DELETE USERS");
});

export default v1UsersRouter;
