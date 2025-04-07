import { Router } from "express";
import v1UsersRouter from "./users.routes.js";
import v1CarsRoutes from "./cars.routes.js";
import v1PokemonRoutes from "./pokemon.routes.js";

const router = Router();

router.use("/users", v1UsersRouter);
router.use("/cars", v1CarsRoutes);
router.use("/pokemon", v1PokemonRoutes);

export default router;
