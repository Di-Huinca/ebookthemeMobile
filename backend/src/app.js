//Dependencias
import express from "express";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUI from "swagger-ui-express"
import { options } from "./swaggerOptions";
//Rutas
import clasesRoutes from './routes/clasesRoutes'
//required
const specs = swaggerJSDoc(options )

const app = express();
//Settings
app.set("port",4000);
//middlewares
app.use(morgan("dev"));
app.use(express.json())
//Uso de Rutas
app.use("/clases",clasesRoutes)
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs))

export default app;
