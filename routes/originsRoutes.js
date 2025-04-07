import express from "express";
const router = express.Router();

//importar el controlador, desestructurizando
import { getOrigins, getOriginById, createOrigin, updateOrigin, deleteOrigin } from "../controllers/originsController.js";

//definir rutas
router.get("/", getOrigins);
router.get("/:id", getOriginById);
router.post("/", createOrigin);
router.put("/:id", updateOrigin);
router.delete("/:id", deleteOrigin);

export default router;