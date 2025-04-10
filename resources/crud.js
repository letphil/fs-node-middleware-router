import { Router } from "express";

const router = Router();

// CREATE
router.post("/", function (req, res) {
  res.send("CREATE");
});

// READ
router.get("{/:id}", function (req, res) {
  res.send("GET OR LIST");
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
