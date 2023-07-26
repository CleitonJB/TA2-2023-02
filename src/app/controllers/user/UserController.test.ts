import { UserController } from "./UserController";

import { UserRepository } from "../../repositorys/user/UserRepository";

class RoleControllerFake {
    private requestRole: any;
    private responseRole: any;

    constructor() {
        this.requestRole = {
            body: jest.fn().mockReturnThis(),
        };

        this.responseRole = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };
    }

    public get(): any {
        //return this.responseRole.status(200).json({ status: 200, data: { id: '123123123', descricao: '3dqsdqdasdad' } });
        return { id: '123123123', descricao: '3dqsdqdasdad' };
    }
}

describe("Testar os métodos padrões (UserController)", () => {
    it("Deve retornar uma instância do usuário", () => {
        const newRoleDummy = new RoleControllerFake();

        const userRepo = new UserRepository();
        const user = new UserController(userRepo);

        expect(user).toBeInstanceOf(UserController);
    });

    it("Deve obter o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const requestSetUser: any = {
            body: {
                id:    "y7n11c97ny91cn",
                nome:  "Cleiton",
                email: "cleiton.braga@gsuite.iff.edu.br",
                senha: "8gyb9e12",
                role:  newRoleDummy.get(),
            },
        };

        const responseSetUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        const requestUser: any = {
            body: {
                id:    "y7n11c97ny91cn",
                nome:  "Cleiton",
                email: "cleiton.braga@gsuite.iff.edu.br",
                senha: "8gyb9e12",
                role:  newRoleDummy.get(),
            },
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.set(requestSetUser, responseSetUser);
        user.get(requestUser, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar erro ao obter o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const requestUser: any = {
            body: {
                id:    "",
                nome:  "Cleiton",
                email: "cleiton.braga@gsuite.iff.edu.br",
                senha: "8gyb9e12",
                role:  newRoleDummy.get(),
            },
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.get(requestUser, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(400);
    });

    it("Deve inserir o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const requestUser: any = {
            body: {
                id:    "012312hn31",
                nome:  "Cleiton",
                email: "cleiton.braga@gsuite.iff.edu.br",
                senha: "8gyb9e12",
                role:  newRoleDummy.get(),
            }
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.set(requestUser, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro (id inválido) ao inserir o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const requestUser: any = {
            body: {
                id:    "",
                nome:  "Cleiton",
                email: "cleiton.braga@gsuite.iff.edu.br",
                senha: "8gyb9e12",
                role:  newRoleDummy.get(),
            },
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.set(requestUser, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar um erro (nome inválido) ao inserir o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const requestUser: any = {
            body: {
                id:    "21312312",
                nome:  "",
                email: "cleiton.braga@gsuite.iff.edu.br",
                senha: "8gyb9e12",
                role:  newRoleDummy.get(),
            },
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.set(requestUser, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar um erro (email inválido) ao inserir o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const requestUser: any = {
            body: {
                id:    "21312312",
                nome:  "Cleiton",
                email: "",
                senha: "8gyb9e12",
                role:  newRoleDummy.get(),
            },
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.set(requestUser, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar um erro (senha inválido) ao inserir o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const requestUser: any = {
            body: {
                id:    "21312312",
                nome:  "Cleiton",
                email: "cleiton.braga@gsuite.iff.edu.br",
                senha: "",
                role:  newRoleDummy.get(),
            },
        };

        const responseUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.set(requestUser, responseUser);

        expect(responseUser.status).toHaveBeenCalledWith(400);
    });

    it("Deve atualizar o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const request: any = {
            body: {
                id:    "1312312312",
                nome:  "Cleiton JB",
                email: "cleiton.jesus.braga@gsuite.iff.edu.br",
                senha: "312313",
                role:  newRoleDummy.get(),
            }
        };

        const responseSetUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.set(request, responseSetUser);

        const responseUpdateUser: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.update(request, responseUpdateUser);

        expect(responseUpdateUser.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro ao atualizar o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const request: any = {
            body: {
                id:    "1312312312",
                nome:  "Cleiton JB",
                email: "cleiton.jesus.braga@gsuite.iff.edu.br",
                senha: "312313",
                role:  newRoleDummy.get(),
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.update(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve deletar o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const requestSet: any = {
            body: {
                id:    "83921aaa",
                nome:  "Cleiton JB",
                email: "cleiton.jesus.braga@gsuite.iff.edu.br",
                senha: "312313",
                role:  newRoleDummy.get(),
            }
        };

        const responseSet: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.set(requestSet, responseSet);

        const requestDelete: any = {
            params: {
                id: "83921aaa",
            }
        };

        const responseDelete: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.delete(requestDelete, responseDelete);

        expect(responseDelete.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro ao deletar o usuário", () => {
        const userRepo = new UserRepository();
        const user = new UserController(userRepo);
        const newRoleDummy = new RoleControllerFake();

        const requestSet: any = {
            body: {
                id:    "43b78t",
                nome:  "Cleiton JB",
                email: "cleiton.jesus.braga@gsuite.iff.edu.br",
                senha: "312313",
                role:  newRoleDummy.get(),
            }
        };

        const responseSet: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.set(requestSet, responseSet);

        const requestDelete: any = {
            params: {
                id: ""
            }
        };

        const responseDelete: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        user.delete(requestDelete, responseDelete);

        expect(responseDelete.status).toHaveBeenCalledWith(400);
    });
});