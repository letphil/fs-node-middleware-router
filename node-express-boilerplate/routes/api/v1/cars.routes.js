import { Router } from "express";
import fs from "fs";

const v1CarsRoutes = Router();

// list or get endpoint
v1CarsRoutes.get("{/:carId}", function (req, res) {
  const carId = req.params.carId;
  if (carId) {
    const car = fs.readFileSync(`./data/cars/${carId}.json`, "utf8");
    return res.send(JSON.parse(car));
  }
  res.send("LIST CARS");
});

// create endpoint
v1CarsRoutes.post("/", function (req, res) {
  res.send("CREATE CARS");
});

// update endpoint
v1CarsRoutes.put("/:userId", function (req, res) {
  res.send("UPDATE CARS");
});

// delete endpoint
v1CarsRoutes.delete("/:userId", function (req, res) {
  res.send("DELETE CARS");
});

export default v1CarsRoutes;
