"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SERVER_PORT = 3333;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (request, response) => {
    // const user: UserVM | null = createUser();
    // console.log(user);
    // if(user == null) {
    //     response.json({ message: 'ERROR'});
    // } else {
    //     response.json({ message: 'OK', user });
    // }
    response.json({ staus: 'OK', message: "Estamos trabalhando nas coisas por aqui... :)" });
});
function createUser() {
    // try {
    //     const role = new RoleController({ id: '132783n928d29d2182313v21', descricao: 'ADM'});
    //     const newUser: UserVM = {
    //         id:    "3129u1g3192312n0n103",
    //         nome:  "Cleiton",
    //         email: "cleitonbraga56@gmail.com",
    //         senha: "9bu123",
    //         role:  role.get(),
    //     };
    //     const user = new UserController(newUser);
    //     return user.get();
    // } catch (error) {
    //     new Error(`Erro ao criar usuário: ${JSON.stringify(error)}`);
    //     return null;
    // }
}
app.listen(SERVER_PORT, () => {
    console.log(`Server started on: http://localhost:${SERVER_PORT}`);
});
//# sourceMappingURL=index.js.map