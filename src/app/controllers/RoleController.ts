import { RoleModel, RoleVM } from "../models/RoleModel";

class RoleController implements RoleModel {
    private id: string;
    private descricao: string;

    constructor(newRole: RoleVM) {
        this.id = newRole.id;
        this.descricao = newRole.descricao;
    }

    public get(): RoleVM {
        return {
            id: this.id,
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