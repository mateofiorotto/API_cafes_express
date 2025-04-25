import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

//importar el controlador, desestructurizando
import { getCoffees, getCoffeeById, createCoffee, updateCoffee, deleteCoffee } from "../controllers/coffeeController.js";

//definir rutas
router.get("/", getCoffees);
router.get("/:id", getCoffeeById);
router.post("/", auth, createCoffee);
router.put("/:id", auth, updateCoffee);
router.delete("/:id", auth, deleteCoffee);

export default router;