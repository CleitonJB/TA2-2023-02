import { RoleVM } from "./RoleModel";

export type UserVM = {
    id: string;
    nome: string;
    email: string;
    senha: string;
    role: RoleVM;
}

export interface IUserModel<UserVM> {
    get(): UserVM;
    set(user: UserVM): void | Error;
    update(): void | Error;
    delete(): void | Error;
}

export class UserModel implements IUserModel<UserVM> {
    private user:  UserVM;

    constructor(user: UserVM) {
        this.set(user);
    }
    
    public get(): UserVM {
        return this.user;
    }

    set(user: UserVM): void | Error {
        this.user = user;
    }

    update(): void | Error {
        return;
    }
    
    delete(): void | Error {
        return;
    }
}