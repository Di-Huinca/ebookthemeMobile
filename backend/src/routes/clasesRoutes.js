import { Router } from "express";
import {
methods 
} from "../controllers/clasesController";

const router = Router();

// router.get('/', getRaiz)
router.get("/", methods.getClases);
// router.get("/clases/count", getClaseCount);
router.get("/:id", methods.getClase);
router.post("/", methods.saveClase);
router.delete("/:id", methods.deleteClase);
router.put("/:id", methods.updateClase);

export default router;
