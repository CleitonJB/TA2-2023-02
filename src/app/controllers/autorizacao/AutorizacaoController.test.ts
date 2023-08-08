import { AutorizacaoRepository } from "../../repositorys/autorizacao/AutorizacaoRepository";

import { AutorizacaoController } from "./AutorizacaoController";

describe("Testar os métodos padrões (AutorizacaoController)", () => {
    it("Deve retornar uma instância do Funcionalidade", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        expect(autorizacao).toBeInstanceOf(AutorizacaoController);
    });

    it("Deve obter uma lista de Autorizações", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const request: any = {
            body: {},
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.getAll(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve obter a Autorização", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const requestSet: any = {
            body: {
                id: '123',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
            }
        };

        const responseSet: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        const requestGet: any = {
            params: {
                id: '123',
            }
        };

        const responseGet: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.set(requestSet, responseSet);
        autorizacao.get(requestGet, responseGet);

        expect(responseGet.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar erro ao obter a Autorização", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const requestSet: any = {
            body: {
                id: '123',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
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

        autorizacao.set(requestSet, responseSet);
        autorizacao.get(requestGet, responseGet);

        expect(responseGet.status).toHaveBeenCalledWith(400);
    });

    it("Deve inserir o Autorização", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const request: any = {
            body: {
                id: '123',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.set(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro ao inserir a Autorização por causa do campo 'id'", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const request: any = {
            body: {
                id: '',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.set(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar um erro ao inserir a Autorização por causa do campo 'role'", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const request: any = {
            body: {
                id: '123',
                role: null,
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.set(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar um erro ao inserir a Autorização por causa do campo 'funcionalidade'", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const request: any = {
            body: {
                id: '123',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: null 
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.set(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve atualizar a Autorização", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const request: any = {
            body: {
                id: '123',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.set(request, response);
        autorizacao.update(request, response);

        expect(response.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro (id inválido) ao atualizar a Autorização", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const request: any = {
            body: {
                id: '',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.update(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve retornar um erro (id inválido) ao atualizar a Autorização", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const request1: any = {
            body: {
                id: '123',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
            }
        };

        const request2: any = {
            body: {
                id: '321',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.set(request1, response);
        autorizacao.update(request2, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });

    it("Deve deletar a Autorização", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const requestBody: any = {
            body: {
                id: '333',
                role: {
                    id: '1',
                    descricao: 'rolezinha'
                },
                funcionalidade: {
                    id: '1',
                    descricao: 'funcionalidadezinha'
                } 
            }
        };

        const responseBody: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        const requestParams: any = {
            params: {
                id: '333',
            }
        };

        const responseParams: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.set(requestBody, responseBody);
        autorizacao.delete(requestParams, responseParams);

        expect(responseParams.status).toHaveBeenCalledWith(200);
    });

    it("Deve retornar um erro ao deletar a Funcionalidade", () => {
        const autorizacaoRepo = new AutorizacaoRepository();
        const autorizacao = new AutorizacaoController(autorizacaoRepo);

        const request: any = {
            params: {
                id: '123',
            }
        };

        const response: any = {
            status: jest.fn().mockReturnThis(),
            json:   jest.fn().mockReturnThis(),
            end:    jest.fn()
        };

        autorizacao.delete(request, response);

        expect(response.status).toHaveBeenCalledWith(400);
    });
});