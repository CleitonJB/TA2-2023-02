export type RoleVM = {
    id: string;
    descricao: string;
}

export interface RoleModel {
    get(): RoleVM;
    set(role: RoleVM): void | Error;
    update(): void | Error;
    delete(): void | Error;
}