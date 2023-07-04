import { RoleVM } from "./RoleModel";

export type UserVM = {
    id: string;
    nome: string;
    email: string;
    senha: string;
    role: RoleVM;
}

export interface UserModel {
    get(): UserVM;
    set(user: UserVM): void | Error;
    update(): void | Error;
    delete(): void | Error;
}