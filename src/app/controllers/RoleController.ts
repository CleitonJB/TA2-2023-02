import { IRoleModel, RoleModel, RoleVM } from "../models/RoleModel";

class RoleController implements IRoleModel<RoleVM> {
    private id: string;
    private descricao: string;

    constructor(newRole: RoleVM) {
        this.set(newRole);
    }

    public get(): RoleVM {
        return {
            id: this.id,
            descricao: this.descricao
        };
    }

    public set(role: RoleVM): void | Error {
        try {
            if(role.id.length == 0) {
                throw ("O campo 'id' é inválido!");
            }

            if(role.descricao.length == 0) {
                throw ("O campo 'descricao' é inválido!");
            }

            this.id        = role.id;
            this.descricao = role.descricao;
        } catch (error) {
            return new Error(`Erro ao inserir role: ${error}`);
        }
    }

    public update(): void | Error {
        return new Error("Method not implemented.");
    }

    public delete(): void | Error {
        return new Error("Method not implemented.");
    }

}

export { RoleController };