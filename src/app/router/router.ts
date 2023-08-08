import express, { Router } from 'express';

import { IUserModel, UserVM } from '../models/UserModel';
import { IRoleModel, RoleVM } from '../models/RoleModel';
import { AutorizacaoVM, IAutorizacaoModel } from '../models/AutorizacaoModel';
import { FuncionalidadeVM, IFuncionalidadeModel } from '../models/FuncionalidadeModel';

class Routers {
    public router: Router;

    constructor(
        private userController: IUserModel<UserVM>,
        private roleController: IRoleModel<RoleVM>,
        private autorizacaoController: IAutorizacaoModel<AutorizacaoVM>,
        private funcionalidadeController: IFuncionalidadeModel<FuncionalidadeVM>,
    ) {
        this.router = express.Router();

        //this.handlerCreateRoutes();
    }

    public async handlerCreateRoutes(): Promise<express.Router | Error> {
        return await Promise.all([
            await this.createUserRouter(this.userController),
            await this.createRoleRouter(this.roleController),
            await this.createFuncionalidadeRouter(this.funcionalidadeController),
            await this.createAutorizacaoRouter(this.autorizacaoController)
        ])
            .then(() => {
                console.log("Rotas criadas com sucesso!");

                return this.router;
            })
            .catch((error: any) => {
                //!console.error(`Erro na criação das rotas: ${error}`);

                return new Error(`Erro na criação das rotas: ${error}`);
            });
    }

    private async createUserRouter(userController: IUserModel<UserVM>): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                //* User
                this.router!.get("/users", userController.getAll);

                this.router!.post("/user/register", userController.set);

                this.router!.get("/user/login", userController.get);

                this.router!.post("/user/:id", userController.update);

                this.router!.delete("/user/:id", userController.delete);

                resolve();
            } catch (error) {
                console.error(`Erro ao criar rotas do 'usuário': ${error}`);
                reject(`Erro ao criar rotas do 'usuário': ${error}`);
            }
        });
    }

    private async createRoleRouter(roleController: IRoleModel<RoleVM>): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                //* Role
                this.router!.get("/roles", roleController.getAll);

                this.router!.post("/role/create", roleController.set);

                this.router!.get("/role/:id", roleController.get);

                this.router!.post("/role/:id", roleController.update);

                this.router!.delete("/role/:id", roleController.delete);

                resolve();
            } catch (error) {
                console.error(`Erro ao criar rotas do 'role': ${error}`);
                reject(`Erro ao criar rotas do 'role': ${error}`);
            }
        });
    }

    private async createFuncionalidadeRouter(funcionalidadeController: IFuncionalidadeModel<FuncionalidadeVM>): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                //* Funcionalidade
                this.router!.get("/funcionalidades", funcionalidadeController.getAll);

                this.router!.post("/funcionalidade/create", funcionalidadeController.set);

                this.router!.get("/funcionalidade/:id", funcionalidadeController.get);

                this.router!.post("/funcionalidade/:id", funcionalidadeController.update);

                this.router!.delete("/funcionalidade/:id", funcionalidadeController.delete);

                resolve();
            } catch (error) {
                console.error(`Erro ao criar rotas da 'funcionalidade': ${error}`);
                reject(`Erro ao criar rotas da 'funcionalidade': ${error}`);
            }
        });
    }

    private async createAutorizacaoRouter(autorizacaoController: IAutorizacaoModel<AutorizacaoVM>): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                //* Autorizacao
                this.router!.get("/autorizacoes", autorizacaoController.getAll);

                this.router!.post("/autorizacao/create", autorizacaoController.set);

                this.router!.get("/autorizacao/:id", autorizacaoController.get);

                this.router!.post("/autorizacao/:id", autorizacaoController.update);

                this.router!.delete("/autorizacao/:id", autorizacaoController.delete);

                resolve();
            } catch (error) {
                console.error(`Erro ao criar rotas da 'autorizacao': ${error}`);
                reject(`Erro ao criar rotas da 'autorizacao': ${error}`);
            }
        });
    }
}

export { Routers };