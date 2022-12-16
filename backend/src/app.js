//Dependencias
import express from "express";
import morgan from "morgan";
//Rutas
import clasesRoutes from './routes/clasesRoutes'


const app = express();

//Settings
app.set("port",4000);

//middlewares
app.use(morgan("dev"));
app.use(express.json())

//Uso de Rutas
app.use("/api/clases",clasesRoutes)

export default app;
