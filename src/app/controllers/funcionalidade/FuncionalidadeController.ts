import { Request, Response } from "express";

import { RequestResponseVM } from "../../models/RequestResponseVM";
import { IFuncionalidadeModel, FuncionalidadeVM } from "../../models/FuncionalidadeModel";

import { IFuncionalidadeRepository } from "../../repositorys/funcionalidade/IFuncionalidadeRepository";

class FuncionalidadeController implements IFuncionalidadeModel<FuncionalidadeVM> {
    private funcionalidadeRepo: IFuncionalidadeRepository<FuncionalidadeVM>;

    constructor(funcionalidadeRepo: IFuncionalidadeRepository<FuncionalidadeVM>) {
        this.funcionalidadeRepo = funcionalidadeRepo;
    }

    public getAll(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const actionReturn: FuncionalidadeVM[] | Error = this.funcionalidadeRepo.getAll();

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao obter lista dos role: ${error}` });
        }
    }

    public get(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const roleData = request.params;

            const actionReturn: FuncionalidadeVM | Error = this.funcionalidadeRepo.getByID(roleData.id);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao obter role: ${error}` });
        }
    }

    public set(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const roleData: FuncionalidadeVM = request.body;

            if(roleData.id.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao criar role: O campo 'id' é inválido!` });
            }

            if(roleData.descricao.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao criar role: O campo 'descricao' é inválido!` });
            }

            const newUserData: FuncionalidadeVM = {
                id:        roleData.id,
                descricao: roleData.descricao,
            }

            const actionReturn: boolean | Error = this.funcionalidadeRepo.create(newUserData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao criar role: ${error}` });
        }
    }

    public update(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const roleData: FuncionalidadeVM = request.body;

            const actionReturn: boolean | Error = this.funcionalidadeRepo.update(roleData.id, roleData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao atualizar role: ${error}` });
        }
    }

    public delete(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const roleData = request.params;

            const actionReturn: boolean | Error = this.funcionalidadeRepo.deleteByID(roleData.id);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao excluir role: ${error}` });
        }
    }
}

export { FuncionalidadeController };