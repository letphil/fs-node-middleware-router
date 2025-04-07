import { Router } from "express";

const v1PokemonRoutes = Router();

// list or get endpoint
v1PokemonRoutes.get("/", function (req, res) {
  res.send("LIST POKEMON");
});

// create endpoint
v1PokemonRoutes.post("/", function (req, res) {
  res.send("CREATE POKEMON");
});

// update endpoint
v1PokemonRoutes.put("/:userId", function (req, res) {
  res.send("UPDATE POKEMON");
});

// delete endpoint
v1PokemonRoutes.delete("/:userId", function (req, res) {
  res.send("DELETE POKEMON");
});

export default v1PokemonRoutes;
