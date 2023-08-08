"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const RoutersFactory_1 = require("./app/router/RoutersFactory");
const SERVER_PORT = 3333;
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, RoutersFactory_1.RouterFactory)()
    .then((routers) => app.use(routers))
    .catch((error) => console.error(`Erro ao fabricar rotas: ${error}`));
app.get('/', (request, response) => {
    response.json({ staus: 'OK', message: "Estamos trabalhando nas coisas por aqui... :)" });
});
app.listen(SERVER_PORT, () => {
    console.log(`Server started on: http://localhost:${SERVER_PORT}`);
});
//# sourceMappingURL=index.js.map