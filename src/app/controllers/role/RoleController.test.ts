import { RoleRepository } from "../../repositorys/role/RoleRepository";

import { RoleController } from "./RoleController";

describe("Testar os métodos padrões (RoleController)", () => {
    it("Deve retornar uma instância da Role", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        expect(role).toBeInstanceOf(RoleController);
    });

    it("Deve obter uma lista de Roles", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const request: any = {
            body: {},
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.getAll(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve obter a Role", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const requestSetRole: any = {
            body: {
                id: '123123123',
                descricao: '3dqsdqdasdad'
            },
        };

        const responseSetRole: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        const requestRole: any = {
            params: {
                id: '123123123',
            }
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.set(requestSetRole, responseSetRole);
        role.get(requestRole, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar erro ao obter a Role", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const requestRole: any = {
            params: {
                id: '235235252',
            },
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.get(requestRole, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar erro (id inválido) ao obter a Role", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const requestRole: any = {
            params: {
                id: '-1',
            },
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.get(requestRole, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(400);
    });

    it("Deve inserir a Role", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const request: any = {
            body: {
                id: '123123123',
                descricao: '3dqsdqdasdad'
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.set(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro ao inserir a Role por causa do campo 'id'", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const request: any = {
            body: {
                id: '', 
                descricao: '321'
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.set(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar um erro ao inserir a Role por causa do campo 'descricao'", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const request: any = {
            body: {
                id: '123', 
                descricao: '' 
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.set(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve atualizar a Role", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const request1: any = {
            body: {
                id: '123',
                descricao: '321'
            }
        };

        const request2: any = {
            body: {
                id: '123',
                descricao: '321'
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.set(request1, response);
        role.update(request2, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro ao atualizar a Role", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const request1: any = {
            body: {
                id: '123123123',
                descricao: '3dqsdqdasdad'
            }
        };

        const request2: any = {
            body: {
                id: '23',
                descricao: '3dqsdqdasdad'
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.set(request1, response);
        role.update(request2, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve deletar a Role", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const requestBody: any = {
            body: {
                id: '123123123',
                descricao: "dasdasdadad"
            }
        };

        const response1: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        const requestParams: any = {
            params: {
                id: '123123123',
            }
        };

        const response2: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.set(requestBody, response1);
        role.delete(requestParams, response2);

        expect(response2.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro ao deletar o role", () => {
        const roleRepo = new RoleRepository();
        const role = new RoleController(roleRepo);

        const request1: any = {
            params: '123123123',
        };

        const request2: any = {
            params: '33131312',
        };

        const response1: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        const response2: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        role.set(request1, response1);
        role.delete(request2, response2);

        expect(response2.status).toHaveBeenCalledWith(400);
    });
});