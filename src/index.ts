import express from "express";
import { UserVM } from "./app/models/UserModel";
import { UserController } from "./app/controllers/UserController";
import { RoleController } from "./app/controllers/RoleController";

const SERVER_PORT: number = 3333;

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    const user: UserVM | null = createUser();
    console.log(user);
    if(user == null) {
        response.json({ message: 'ERROR'});
    } else {
        response.json({ message: 'OK', user });
    }
});

function createUser(): UserVM | null {
    try {
        const role = new RoleController({ role: '132783n928d29d2182313v21', descricao: 'ADM'});
        const newUser: UserVM = {
            id:    "3129u1g3192312n0n103",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "9bu123",
            role:  role.get(),
        };
        
        const user = new UserController(newUser);

        return user.get();
    } catch (error) {
        new Error(`Erro ao criar usuário: ${JSON.stringify(error)}`);
        return null;
    }
}

app.listen(SERVER_PORT, () => {
    console.log(`Server started on: http://localhost:${SERVER_PORT}`);
});