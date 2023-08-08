import { RoleVM } from '../../models/RoleModel'; 

import { IRoleRepository } from "./IRoleRepository";

class RoleRepository implements IRoleRepository<RoleVM> {
    private roles: RoleVM[];

    constructor() {
        this.roles = [];
    }

    public create(role: RoleVM): boolean | Error {
        try {
            if(!role) throw("O tipo do parâmetro informado é inválido!");
            if(!role.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!role.descricao) throw("O campo 'descricao' não foi informado!");

            const roleIndex: number = (this.roles.length === 0) ? -1 : this.roles.findIndex((data) => data?.id === role?.id);

            if(roleIndex !== -1) {
                throw("A role já está cadastrada!");
            } else {
                this.roles.push(role);
                return true;
            }
        } catch (error: any) {
            return new Error(error);
        }
    }

    public getByID(id: string): RoleVM | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            const roleData = this.roles.find((data) => data!.id === id);
            
            if(!roleData) {
                throw(`Role com id = '${id}' não foi encontrada!`);
            } else {
                return roleData;
            }
        } catch (error: any) {
            return new Error(error);
        }
    }

    public getAll(): RoleVM[] {
        return this.roles;
    }

    public update(id: string, role: RoleVM): boolean | Error {
        try {
            if(!role) throw("Um dos parâmetros informados é(são) inválido(s)!");
            if(!id || !role.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!role.descricao) throw("O campo 'descricao' não foi informado!");

            const roleIndex: number = this.roles.findIndex((data) => data?.id === id);

            if(roleIndex === -1) {
                throw(`Role com id = '${id}' não foi encontrada!`);
            } else {
                this.roles[roleIndex] = JSON.parse(JSON.stringify(role));
                return true;
            }
        } catch (error: any) {
            return new Error(error);
        }
    }

    public deleteByID(id: string): boolean | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            const roleIndex: number = this.roles.findIndex((data) => data?.id === id);

            if(roleIndex === -1) {
                throw(`Role com id = '${id}' não foi encontrada!`);
            } else {
                this.roles.splice(roleIndex, 1);
                return true;
            }
        } catch (error: any) {
            return new Error(error);
        }
    }
}

export { RoleRepository };