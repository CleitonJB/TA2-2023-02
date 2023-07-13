import { IRoleRepository } from "./IRoleRepository";

import { RoleVM } from '../../models/RoleModel'; 

class RoleRepository implements IRoleRepository<RoleVM> {
    constructor() {

    }

    public create(role: RoleVM): boolean | Error {
        try {
            if(!role) throw("O tipo do parâmetro informado é inválido!");
            if(!role.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!role.descricao) throw("O campo 'descricao' não foi informado!");

            const newRole: RoleVM = {
                id:        role.id,
                descricao: role.descricao
            };

            return true;
        } catch (error: any) {
            return new Error(error);
        }
    }

    public getByID(id: string): RoleVM | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            const newRole: RoleVM = {
                id: "1",
                descricao: "rolezinha fixo"
            };

            if(id !== newRole.id) throw(`Role com id = '${id}' não foi encontrada!`);

            return newRole;
        } catch (error: any) {
            return new Error(error);
        }
    }

    public getAll(): RoleVM[] {
        return [
            {
                id: "1",
                descricao: "rolezinha fixo 1"
            },
            {
                id: "2",
                descricao: "rolezinha fixo 2"
            }
        ];
    }

    public update(id: string, role: RoleVM): boolean | Error {
        try {
            if(!role) throw("Um dos parâmetros informados é(são) inválido(s)!");
            if(!id || !role.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!role.descricao) throw("O campo 'descricao' não foi informado!");

            let newRole: RoleVM = {
                id: "1",
                descricao: "rolezinha fixo"
            };

            if(id === newRole.id) {
                newRole.descricao = role.descricao;
            } else {
                throw(`Role com id = '${id}' não foi encontrada!`);
            }

            return true;
        } catch (error: any) {
            return new Error(error);
        }
    }

    public deleteByID(id: string): boolean | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            let newRole: RoleVM | null = {
                id: "1",
                descricao: "rolezinha fixo"
            };

            if(id === newRole.id) {
                newRole = null;
            } else {
                throw(`Role com id = '${id}' não foi encontrada!`);
            }

            return true;
        } catch (error: any) {
            return new Error(error);
        }
    }
}

export { RoleRepository };