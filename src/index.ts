import express from "express";
import { cria_rota } from "./rotas/rota";

const SERVER_PORT: number = 3333;

const app = express();

const router = cria_rota();

app.use(express.json());
app.use(router);

app.listen(SERVER_PORT, () => {
    console.log(`Server started on: http://localhost:${SERVER_PORT}`);
});
