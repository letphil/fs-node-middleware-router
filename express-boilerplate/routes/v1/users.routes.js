import { Router } from "express";

import usersController from "../../controllers/users.controller.js";

const router = Router();

// CREATE
router.post("/", function (req, res) {
  const timestamp = req.timestamp;
  const name = req.body.name;
  const age = req.body.age;
  const user = usersController.create(name, age, timestamp);
  res.send({
    msg: "User saved successfully!",
    data: user,
  });
});

// READ
router.get("{/:id}", function (req, res) {
  if (req.params.id) {
    const user = usersController.get(req.params.id);
    return res.send(user);
  }

  const list = usersController.list();
  return res.send({
    data: list,
    count: list.length,
  });
});

// UPDATE
router.put("/:id", function (req, res) {
  res.send(`update with id - ${req.params.id}`);
});

// DELETE
router.delete("/:id", function (req, res) {
  res.send(`delete by id - ${req.params.id}`);
});

export default router;
