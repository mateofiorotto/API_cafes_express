import express from "express";
import auth from "../middleware/auth.js";

const router = express.Router();

//importar el controlador, desestructurizando
import { getOrigins, getOriginById, createOrigin, updateOrigin, deleteOrigin } from "../controllers/originController.js";

//definir rutas
router.get("/", getOrigins);
router.get("/:id", getOriginById);
router.post("/", auth, createOrigin);
router.put("/:id", auth, updateOrigin);
router.delete("/:id", auth, deleteOrigin);

export default router;