export type RoleVM = {
    id: string;
    descricao: string;
}

export interface IRoleModel<RoleVM> {
    get(): RoleVM;
    set(role: RoleVM): void | Error;
    update(): void | Error;
    delete(): void | Error;
}

export class RoleModel implements IRoleModel<RoleVM> {
    private role:  RoleVM;

    constructor(role: RoleVM) {
        this.set(role);
    }

    public get(): RoleVM {
        return this.role;
    }

    public set(role: RoleVM): void | Error {
        this.role = role;
    }
    
    public update(): void | Error {
        return;
    }
    
    public delete(): void | Error {
        return;
    }
}