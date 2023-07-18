import { RoleVM } from '../../models/RoleModel'; 

import { IRoleRepository } from "./IRoleRepository";

class RoleRepository implements IRoleRepository<RoleVM> {
    private role: RoleVM | null;

    constructor() {
        this.role = null;
    }

    public create(role: RoleVM): boolean | Error {
        try {
            if(!role) throw("O tipo do parâmetro informado é inválido!");
            if(!role.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!role.descricao) throw("O campo 'descricao' não foi informado!");

            this.role = JSON.parse(JSON.stringify(role));

            return true;
        } catch (error: any) {
            return new Error(error);
        }
    }

    public getByID(id: string): RoleVM | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            if(id !== this.role?.id) throw(`Role com id = '${id}' não foi encontrada!`);

            return this.role;
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

            if(id === this.role?.id) {
                this.role.descricao = role.descricao;
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

            if(id === this.role?.id) {
                this.role = null;
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