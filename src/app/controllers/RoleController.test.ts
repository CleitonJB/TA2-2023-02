import { RoleVM } from "../models/RoleModel";

import { RoleController } from "./RoleController";

describe("Testar os métodos padrões", () => {
    it("Deve retornar uma instância do role", () => {
        const role = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });

        expect(role).toBeInstanceOf(RoleController);
    });

    it("Deve inserir o role", () => {
        const role = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });

        const newUser = { 
            id: '123', 
            descricao: '321' 
        };

        expect(role.set(newUser)).toBeUndefined();
    });

    it("Deve retornar um erro ao inserir o role por causa do campo 'id'", () => {
        const role = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });

        const newUser = { 
            id: '', 
            descricao: '321' 
        };

        expect(role.set(newUser)).toStrictEqual(new Error("Erro ao inserir role: O campo 'id' é inválido!"));
    });

    it("Deve retornar um erro ao inserir o role por causa do campo 'descricao'", () => {
        const role = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });

        const newUser = { 
            id: '123', 
            descricao: '' 
        };

        expect(role.set(newUser)).toStrictEqual(new Error("Erro ao inserir role: O campo 'descricao' é inválido!"));
    });

    it("Deve retornar um erro ao atualizar o role", () => {
        const role = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });

        expect(role.update()).toStrictEqual(new Error("Method not implemented."));
    });

    it("Deve retornar um erro ao deletar o role", () => {
        const role = new RoleController({ id: '123123123', descricao: '3dqsdqdasdad' });

        expect(role.delete()).toStrictEqual(new Error("Method not implemented."));
    });
});