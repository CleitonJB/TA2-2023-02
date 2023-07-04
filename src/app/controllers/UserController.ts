import { UserModel, UserVM } from "../models/UserModel";
import { RoleVM } from "../models/RoleModel";

class UserController implements UserModel {
    private id:    string;
    private nome:  string;
    private email: string;
    private senha: string;
    private role:  RoleVM;

    constructor(newUser: UserVM) {
        this.set(newUser);
    }

    public get(): UserVM {
        return {
            id:    this.id,
            nome:  this.nome,
            email: this.email,
            senha: this.senha,
            role:  this.role
        };
    }

    public set(user: UserVM): void | Error {
        try {
            if(user.id.length == 0) {
                throw ("O campo 'id' é inválido!");
            }

            if(user.nome.length == 0) {
                throw ("O campo 'nome' é inválido!");
            }

            if(user.email.length == 0) {
                throw ("O campo 'email' é inválido!");
            }

            if(user.senha.length == 0) {
                throw ("O campo 'senha' é inválido!");
            }

            this.id    = user.id;
            this.nome  = user.nome;
            this.email = user.email;
            this.senha = user.senha;
            this.role  = user.role;

            return;
        } catch (error) {
            return new Error(`Erro ao inserir usuário: ${error}`);
        }
    }

    public update(): void | Error {
        return new Error("Method not implemented.");
    }

    public delete(): void | Error {
        return new Error("Method not implemented.");
    }
}

export { UserController };