import { Request, Response } from "express";

import { RequestResponseVM } from "../../models/RequestResponseVM";
import { IUserModel, UserVM } from "../../models/UserModel";

import { IUserRepository } from "../../repositorys/user/IUserRepository";

class UserController implements IUserModel<UserVM> {
    private userRepo: IUserRepository<UserVM>;

    constructor(userRepo: IUserRepository<UserVM>) {
        this.userRepo = userRepo;
    }

    public getAll(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const actionReturn: (UserVM | undefined)[] | Error = this.userRepo.getAll();

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao obter a lista de Usuários: ${error}` });
        }
    }

    public get(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const actionReturn: UserVM | Error = this.userRepo.login(request.body);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao obter usuário: ${error}` });
        }
    }

    public set(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const userData: UserVM = request.body;

            if(userData.id.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao inserir usuário: O campo 'id' é inválido!` });
            }

            if(userData.nome.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao inserir usuário: O campo 'nome' é inválido!` });
            }

            if(userData.email.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao inserir usuário: O campo 'email' é inválido!` });
            }

            if(userData.senha.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao inserir usuário: O campo 'senha' é inválido!` });
            }

            const newUserData: UserVM = {
                id   : userData.id,
                nome : userData.nome,
                email: userData.email,
                senha: userData.senha,
                role : userData.role,
            }

            const actionReturn: boolean | Error = this.userRepo.register(newUserData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao inserir usuário: ${error}` });
        }
    }

    public update(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const userData: UserVM = request.body;

            const actionReturn: boolean | Error = this.userRepo.update(userData.id, userData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao atualizar usuário: ${error}` });
        }
    }

    public delete(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const userData = request.params;

            const actionReturn: boolean | Error = this.userRepo.delete(userData.id);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao deletar usuário: ${error}` });
        }
    }
}

export { UserController };