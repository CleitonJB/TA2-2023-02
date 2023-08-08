import { Request, Response } from "express";

import { RequestResponseVM } from "src/app/models/RequestResponseVM";
import { AutorizacaoVM, IAutorizacaoModel } from "src/app/models/AutorizacaoModel";

import { IAutorizacaoRepository } from "src/app/repositorys/autorizacao/IAutorizacaoRepository";

class AutorizacaoController implements IAutorizacaoModel<AutorizacaoVM> {
    constructor(
        private autorizacaoRepository: IAutorizacaoRepository<AutorizacaoVM>
    ) {}

    public getAll(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const actionReturn: AutorizacaoVM[] | Error = this.autorizacaoRepository.getAll();

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao obter a lista de Autorizações: ${error}` });
        }
    }

    public get(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const autorizacaoData = request.params;

            const actionReturn: AutorizacaoVM | Error = this.autorizacaoRepository.getByID(autorizacaoData.id);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao obter a autorização: ${error}` });
        }
    }

    public set(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const autorizacaoData: AutorizacaoVM = request.body;

            if(autorizacaoData.id.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao criar autorizacao: O campo 'id' é inválido!` });
            }

            if(!autorizacaoData.role || !(autorizacaoData.role as Object).hasOwnProperty("id") || !(autorizacaoData.role as Object).hasOwnProperty("descricao")) { // Poderia ser melhor isso aqui em
                return response.status(400).json({ status: 400, error: `Erro ao criar autorizacao: O campo 'role' é inválido!` });
            }

            if(!autorizacaoData.funcionalidade || !(autorizacaoData.funcionalidade as Object).hasOwnProperty("id") || !(autorizacaoData.funcionalidade as Object).hasOwnProperty("descricao")) { // Poderia ser melhor isso aqui em
                return response.status(400).json({ status: 400, error: `Erro ao criar autorizacao: O campo 'funcionalidade' é inválido!` });
            }

            const newAutorizacaoData: AutorizacaoVM = {
                id:             autorizacaoData.id,
                role:           autorizacaoData.role,
                funcionalidade: autorizacaoData.funcionalidade
            };

            const actionReturn: boolean | Error = this.autorizacaoRepository.create(newAutorizacaoData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao setar a autorização: ${error}` });
        }
    }

    public update(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const autorizacaoData: AutorizacaoVM = request.body;

            const actionReturn: boolean | Error = this.autorizacaoRepository.update(autorizacaoData.id, autorizacaoData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao atualizar a autorização: ${error}` });
        }
    }

    public delete(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const autorizacaoData = request.params;

            const actionReturn: boolean | Error = this.autorizacaoRepository.deleteByID(autorizacaoData.id);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao excluir a atualização: ${error}` });
        }
    }
}

export { AutorizacaoController };