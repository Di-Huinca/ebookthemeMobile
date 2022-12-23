import { Router } from "express";
import {
methods 
} from "../controllers/clasesController";

const router = Router();

// router.get('/', getRaiz)
// router.get("/clases/count", getClaseCount);

/**
 * @swagger
 * tags: 
 *  name: Clases
 *  description: Clases endpoint
 */

/**
 * @swagger
 * /clases: 
 *    get:
 *       summary: Obtener todas las clases
 *       tags: [Clases]
 */
router.get("/", methods.getClases);
/**
 * @swagger
 * /clases: 
 *    get:
 *       summary: Obtener una clase
 *       tags: [Clases]
 */
router.get("/:id", methods.getClase);
/**
 * @swagger
 * /clases: 
 *    post:
 *       summary: Guardar una clase 
 *       tags: [Clases]
 */
router.post("/", methods.saveClase);
/**
 * @swagger
 * /clases: 
 *    delete:
 *       summary: Eliminar una clase 
 *       tags: [Clases]
 */
router.delete("/:id", methods.deleteClase);
/**
 * @swagger
 * /clases: 
 *    put:
 *       summary: Actualizar una clase 
 *       tags: [Clases]
 */
router.put("/:id", methods.updateClase);

export default router;
