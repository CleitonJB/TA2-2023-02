import { IUserRepository } from "./IUserRepository";

import { UserVM } from "src/app/models/UserModel";

export class UserRepository implements IUserRepository<UserVM> {
    private usersList: Partial<UserVM[]>;

    constructor() {
        this.usersList = [];
    }

    public register(user: UserVM): boolean | Error {
        try {
            if(!user) throw("Os dados informados do usuário são inválidos!");
            if(!user.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!user.nome) throw("O campo 'nome' não foi informado ou é inválido!");
            if(!user.email) throw("O campo 'email' não foi informado ou é inválido!");
            if(!user.senha) throw("O campo 'senha' não foi informado ou é inválido!");
            if(!user.role || !user.role.id || !user.role.descricao) throw("O campo 'role' não foi informado ou é inválido!");

            //* (this.usersList.length === 0): Verificar se a lista está vazia, pq não dá para verificar né amigão
            const userIndex: number = (this.usersList.length === 0) ? -1 : this.usersList.findIndex((data) => data?.id === user?.id);

            if(userIndex !== -1) {
                throw("O usuário já está cadastrado!");
            } else {
                this.usersList.push(user);
                return true;
            }
        } catch (error) {
            return new Error(`Erro ao cadastrar usuário: ${error}`);
        }
    }

    public login(user: UserVM): UserVM | Error {
        try {
            if(!user) throw("Os dados informados do usuário são inválidos!");
            if(this.usersList.length == 0) throw("Não há usuários cadastrados!");

            const userData = this.usersList.find((data) => data!.email === user!.email && data!.senha === user!.senha);

            if(!userData) {
                throw("O usuário informado não existe!");
            } else {
                //!userData["senha"] = "";
                return userData;
            }
        } catch (error) {
            return new Error(`Erro ao obter usuário: ${error}`);
        }
    }

    public getAll(): Partial<UserVM[]> | Error {
        try {
            //! Remover campos 'senha' dos usuários
            return JSON.parse(JSON.stringify(this.usersList));
        } catch (error) {
            return new Error(`Erro ao obter a listagem de usuários: ${error}`);
        }
    }

    public update(userID: string, user: UserVM): boolean | Error {
        try {
            if(!userID) throw("O campo 'id' não foi informado ou é inválido!");
            if(!user) throw("Os dados informados do usuário são inválidos!");
            if(userID !== user.id) throw("Os dados informados não são consistêntes!");

            const userIndex: number = this.usersList.findIndex((data) => data?.id === userID);

            if(userIndex === -1) {
                throw("O usuário informado não existe!");
            } else {
                this.usersList[userIndex] = JSON.parse(JSON.stringify(user));
                return true;
            }
        } catch (error) {
            return new Error(`Erro ao atualizar os dados do usuário: ${error}`);
        }
    }

    public delete(userID: string): boolean | Error {
        try {
            if(!userID) throw("O campo 'id' não foi informado ou é inválido!");

            const userIndex: number = this.usersList.findIndex((data) => data?.id === userID);

            if(userIndex === -1) {
                throw("O usuário informado não existe!");
            } else {
                this.usersList.splice(userIndex, 1);
                return true;
            }
        } catch (error) {
            return new Error(`Erro ao excluir os dados do usuário: ${error}`);
        }
    }
}