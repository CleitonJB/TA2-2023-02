import { RoleModel, RoleVM } from "../models/RoleModel";

class RoleController implements RoleModel {
    private role: string;
    private descricao: string;

    constructor(newRole: RoleVM) {
        this.role = newRole.role;
        this.descricao = newRole.descricao;
    }

    public get(): RoleVM {
        return {
            role: this.role,
            descricao: this.descricao
        };
    }

    public set(role: RoleVM): void {
        throw new Error("Method not implemented.");
    }

    public update(): boolean {
        throw new Error("Method not implemented.");
    }

    public delete(): boolean {
        throw new Error("Method not implemented.");
    }

}

export { RoleController };