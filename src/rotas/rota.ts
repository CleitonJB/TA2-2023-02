import express from "express";
import { Fabrica_De_Controladores } from "../main/fabricas";

function cria_rota() {
    const router = express.Router();
    const controlador = Fabrica_De_Controladores();
    router.get("/", controlador.handler.bind(controlador));
    return router;
}

export { cria_rota };