import express, { Router } from "express";
import { Fabrica_De_Controladores } from "../main/fabricas";

function cria_rota(): Router {
    const router = express.Router();
    const controlador = Fabrica_De_Controladores();

    router.get("/", controlador.handler.bind(controlador));
    
    return router;
}

export { cria_rota };