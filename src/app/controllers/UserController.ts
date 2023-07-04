import { UserModel, UserVM } from "../models/UserModel";
import { RoleVM } from "../models/RoleModel";

class UserController implements UserModel {
    private id: string;
    private nome: string;
    private email: string;
    private senha: string;
    private role: RoleVM;

    constructor(newUser: UserVM) {
        this.id    = newUser.id;
        this.nome  = newUser.nome;
        this.email = newUser.email;
        this.senha = newUser.senha;
        this.role  = newUser.role;
    }

    public get(): UserVM {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            role: this.role
        };
    }

    public set(user: UserVM): void {
        throw new Error("Method not implemented.");
    }

    public update(): boolean {
        throw new Error("Method not implemented.");
    }

    public delete(): boolean {
        throw new Error("Method not implemented.");
    }
}

export { UserController };