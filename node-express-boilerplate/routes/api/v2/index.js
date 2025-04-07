import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  res.send("V2 ROUTES");
});

export default router;
