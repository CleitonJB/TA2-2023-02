import { Request, Response } from "express";

import { RequestResponseVM } from "../../models/RequestResponseVM";
import { IRoleModel, RoleVM } from "../../models/RoleModel";

import { IRoleRepository } from "../../repositorys/role/IRoleRepository";

class RoleController implements IRoleModel<RoleVM> {
    private roleRepo: IRoleRepository<RoleVM>;

    constructor(roleRepo: IRoleRepository<RoleVM>) {
        this.roleRepo = roleRepo;
    }

    public getAll(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const actionReturn: RoleVM[] | Error = this.roleRepo.getAll();

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn.message });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao obter a lista das Roles: ${error}` });
        }
    }

    public get(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const roleData = request.params;

            if(!roleData.id || roleData.id == "-1") {
                return response.status(400).json({ status: 400, error: `Erro ao obter role: O campo 'id' não foi informado ou é inválido!` });
            }

            const actionReturn: RoleVM | Error = this.roleRepo.getByID(roleData.id);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn.message });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao obter role: ${error}` });
        }
    }

    public set(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const roleData: RoleVM = request.body;

            if(roleData.id.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao criar role: O campo 'id' é inválido!` });
            }

            if(roleData.descricao.length == 0) {
                return response.status(400).json({ status: 400, error: `Erro ao criar role: O campo 'descricao' é inválido!` });
            }

            const newUserData: RoleVM = {
                id:        roleData.id,
                descricao: roleData.descricao,
            }

            const actionReturn: boolean | Error = this.roleRepo.create(newUserData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn.message });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao criar role: ${error}` });
        }
    }

    public update(request: Request, response: Response): Response<RequestResponseVM> {
        try {
            const roleData: RoleVM = request.body;

            const actionReturn: boolean | Error = this.roleRepo.update(roleData.id, roleData);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn.message });
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

            const actionReturn: boolean | Error = this.roleRepo.deleteByID(roleData.id);

            if(actionReturn instanceof Error) {
                return response.status(400).json({ status: 400, error: actionReturn.message });
            } else {
                return response.status(200).json({ status: 200, data: actionReturn });
            }
        } catch (error) {
            return response.status(500).json({ status: 500, error: `Erro ao excluir role: ${error}` });
        }
    }
}

export { RoleController };