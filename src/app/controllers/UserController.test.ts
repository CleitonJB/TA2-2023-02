import { UserVM } from "../models/UserModel";

import { RoleController } from "./RoleController";
import { UserController } from "./UserController";

describe("Testar os métodos padrões", () => {
    it("Deve retornar uma instância do usuário", () => {
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

    it("Deve obter o usuário", () => {
        const newRole = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });
        const newUser: UserVM = {
            id:    "01-2312hn31",
            nome:  "Cleiton",
            email: "cleiton.braga@gsuite.iff.edu.br",
            senha: "8gyb9e12",
            role:  newRole.get(),
        };

        const user = new UserController(newUser);

        expect(user.get()).not.toBeUndefined();
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

    it("Deve retornar um erro ao inserir o usuário por causa do campo 'id'", () => {
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

    it("Deve retornar um erro ao inserir o usuário por causa do campo 'nome'", () => {
        const newRole = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });
        const newUser: UserVM = {
            id:    "1312312312",
            nome:  "",
            email: "cleiton.braga@gsuite.iff.edu.br",
            senha: "8gyb9e12",
            role:  newRole.get(),
        };

        const user = new UserController(newUser);

        expect(user.set(newUser)).toStrictEqual(new Error("Erro ao inserir usuário: O campo 'nome' é inválido!"));
    });

    it("Deve retornar um erro ao inserir o usuário por causa do campo 'email'", () => {
        const newRole = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });
        const newUser: UserVM = {
            id:    "1312312312",
            nome:  "Cleiton",
            email: "",
            senha: "8gyb9e12",
            role:  newRole.get(),
        };

        const user = new UserController(newUser);

        expect(user.set(newUser)).toStrictEqual(new Error("Erro ao inserir usuário: O campo 'email' é inválido!"));
    });

    it("Deve retornar um erro ao inserir o usuário por causa do campo 'senha'", () => {
        const newRole = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });
        const newUser: UserVM = {
            id:    "1312312312",
            nome:  "Cleiton",
            email: "cleiton.braga@gsuite.iff.edu.br",
            senha: "",
            role:  newRole.get(),
        };

        const user = new UserController(newUser);

        expect(user.set(newUser)).toStrictEqual(new Error("Erro ao inserir usuário: O campo 'senha' é inválido!"));
    });

    it("Deve retornar um erro ao atualizar o usuário", () => {
        const newRole = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });
        const newUser: UserVM = {
            id:    "1312312312",
            nome:  "Cleiton",
            email: "cleiton.braga@gsuite.iff.edu.br",
            senha: "",
            role:  newRole.get(),
        };

        const user = new UserController(newUser);

        expect(user.update()).toStrictEqual(new Error("Method not implemented."));
    });

    it("Deve retornar um erro ao deletar o usuário", () => {
        const newRole = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });
        const newUser: UserVM = {
            id:    "1312312312",
            nome:  "Cleiton",
            email: "cleiton.braga@gsuite.iff.edu.br",
            senha: "",
            role:  newRole.get(),
        };

        const user = new UserController(newUser);

        expect(user.delete()).toStrictEqual(new Error("Method not implemented."));
    });
});