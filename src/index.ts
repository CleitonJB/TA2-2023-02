import express from "express";

import { RouterFactory } from "./app/router/RoutersFactory";

const SERVER_PORT: number = 3333;

const app = express();

app.use(express.json());

RouterFactory()
    .then((routers: express.Router) => app.use(routers))
    .catch((error: string) => console.error(`Erro ao fabricar rotas: ${error}`));

app.get('/', (request, response) => {
    response.json({ staus: 'OK', message: "Estamos trabalhando nas coisas por aqui... :)" });
});

app.listen(SERVER_PORT, () => {
    console.log(`Server started on: http://localhost:${SERVER_PORT}`);
});