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
            return response.status(500).json({ status: 500, error: `Erro ao obter a lista das Funcionalidades: ${error}` });
        }
    }

    public get(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const funcionalidadeData = request.params;

            const actionReturn: FuncionalidadeVM | Error = this.funcionalidadeRepo.getByID(funcionalidadeData.id);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao obter funcionalidade: ${error}` });
        }
    }

    public set(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const funcionalidadeData: FuncionalidadeVM = request.body;

            if(funcionalidadeData.id.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao criar funcionalidade: O campo 'id' é inválido!` });
            }

            if(funcionalidadeData.descricao.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao criar funcionalidade: O campo 'descricao' é inválido!` });
            }

            const newUserData: FuncionalidadeVM = {
                id:        funcionalidadeData.id,
                descricao: funcionalidadeData.descricao,
            }

            const actionReturn: boolean | Error = this.funcionalidadeRepo.create(newUserData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao criar funcionalidade: ${error}` });
        }
    }

    public update(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const funcionalidadeData: FuncionalidadeVM = request.body;

            const actionReturn: boolean | Error = this.funcionalidadeRepo.update(funcionalidadeData.id, funcionalidadeData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao atualizar funcionalidade: ${error}` });
        }
    }

    public delete(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const funcionalidadeData = request.params;

            const actionReturn: boolean | Error = this.funcionalidadeRepo.deleteByID(funcionalidadeData.id);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao excluir funcionalidade: ${error}` });
        }
    }
}

export { FuncionalidadeController };