import { FuncionalidadeRepository } from "../../repositorys/funcionalidade/FuncionalidadeRepository";

import { FuncionalidadeController } from "./FuncionalidadeController";

describe("Testar os métodos padrões (FuncionalidadeController)", () => {
    it("Deve retornar uma instância do Funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        expect(funcionalidade).toBeInstanceOf(FuncionalidadeController);
    });

    it("Deve obter uma lista de Funcionalidades", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        const request: any = {
            body: {},
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        funcionalidade.getAll(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve obter a Funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        const requestSet: any = {
            body: {
                id: '123123123',
                descricao: '3dqsdqdasdad'
            }
        };

        const responseSet: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        const requestGet: any = {
            params: {
                id: '123123123',
            }
        };

        const responseGet: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        funcionalidade.set(requestSet, responseSet);
        funcionalidade.get(requestGet, responseGet);

        expect(responseGet.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar erro ao obter a Funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        const requestSet: any = {
            body: {
                id: '123123123',
                descricao: '3dqsdqdasdad'
            }
        };

        const responseSet: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        const requestGet: any = {
            params: {
                id: '319206',
            }
        };

        const responseGet: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        funcionalidade.set(requestSet, responseSet);
        funcionalidade.get(requestGet, responseGet);

        expect(responseGet.status).toHaveBeenCalledWith(400);
    });

    it("Deve inserir o Funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

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

        funcionalidade.set(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro ao inserir a Funcionalidade por causa do campo 'id'", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        const request: any = {
            body: {
                id: '',
                descricao: '3dqsdqdasdad'
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        funcionalidade.set(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar um erro ao inserir a Funcionalidade por causa do campo 'descricao'", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        const request: any = {
            body: {
                id: '123123123',
                descricao: ''
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        funcionalidade.set(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve atualizar a Funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

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

        funcionalidade.set(request, response);
        funcionalidade.update(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro (id inválido) ao atualizar a Funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        const request: any = {
            body: {
                id: '',
                descricao: '3dqsdqdasdad'
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        funcionalidade.update(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar um erro (id inválido) ao atualizar a Funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        const request1: any = {
            body: {
                id: '123',
                descricao: '3dqsdqdasdad'
            }
        };

        const request2: any = {
            body: {
                id: '321',
                descricao: '3dqsdqdasdad'
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        funcionalidade.set(request1, response);
        funcionalidade.update(request2, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve deletar a Funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        const requestBody: any = {
            body: {
                id: '123123123',
                descricao: '3dqsdqdasdad'
            }
        };

        const requestParams: any = {
            params: {
                id: '123123123',
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        funcionalidade.set(requestBody, response);
        funcionalidade.delete(requestParams, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro ao deletar a Funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        const funcionalidade = new FuncionalidadeController(funcionalidadeRepo);

        const request: any = {
            params: {
                id: '123123123',
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        funcionalidade.delete(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });
});