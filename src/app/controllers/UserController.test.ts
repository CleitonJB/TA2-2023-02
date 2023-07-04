import { UserVM } from "../models/UserModel";

import { RoleController } from "./RoleController";
import { UserController } from "./UserController";

describe("Testar os métodos padrões", () => {
    it("Deve retornar o usuário", () => {
        const newRole = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });
        const newUser: UserVM = {
            id:    "y7n11c97ny91cn",
            nome:  "Cleiton",
            email: "cleiton.braga@gsuite.iff.edu.br",
            senha: "8gyb9e12",
            role:  newRole.get(),
        };

        const user = new UserController(newUser);

        expect(user).toBeInstanceOf(UserController);
    });

    it("Deve inserir o usuário", () => {
        const newRole = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });
        const newUser: UserVM = {
            id:    "01-2312hn31",
            nome:  "Cleiton",
            email: "cleiton.braga@gsuite.iff.edu.br",
            senha: "8gyb9e12",
            role:  newRole.get(),
        };

        const user = new UserController(newUser);

        expect(user.set(newUser)).toBeUndefined();
    });

    it("Deve retornar um erro ao inserir o usuário", () => {
        const newRole = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });
        const newUser: UserVM = {
            id:    "",
            nome:  "Cleiton",
            email: "cleiton.braga@gsuite.iff.edu.br",
            senha: "8gyb9e12",
            role:  newRole.get(),
        };

        const user = new UserController(newUser);

        expect(user.set(newUser)).toStrictEqual(new Error("Erro ao inserir usuário: O campo 'id' é inválido!"));
    });
});