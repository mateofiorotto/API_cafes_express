import express from "express";
const router = express.Router();

//importar el controlador, desestructurizando
import { getCoffees, getCoffeeById, createCoffee, updateCoffee, deleteCoffee } from "../controllers/coffeesController.js";

//definir rutas
router.get("/", getCoffees);
router.get("/:id", getCoffeeById);
router.post("/", createCoffee);
router.put("/:id", updateCoffee);
router.delete("/:id", deleteCoffee);

export default router;