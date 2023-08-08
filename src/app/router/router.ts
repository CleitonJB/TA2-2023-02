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
                this.router!.get("/users", (request, response) => userController.getAll(request, response));

                this.router!.post("/user/register",(request, response) =>  userController.set(request, response));

                this.router!.get("/user/login", (request, response) => userController.get(request, response));

                this.router!.post("/user/:id", (request, response) => userController.update(request, response));

                this.router!.delete("/user/:id", (request, response) => userController.delete(request, response));

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
                this.router!.get("/roles", (request, response) => roleController.getAll(request, response));

                this.router!.post("/role/create", (request, response) => roleController.set(request, response));

                this.router!.get("/role/:id", (request, response) => roleController.get(request, response));

                this.router!.post("/role/:id", (request, response) => roleController.update(request, response));

                this.router!.delete("/role/:id", (request, response) => roleController.delete(request, response));

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
                this.router!.get("/funcionalidades", (request, response) => funcionalidadeController.getAll(request, response));

                this.router!.post("/funcionalidade/create", (request, response) => funcionalidadeController.set(request, response));

                this.router!.get("/funcionalidade/:id", (request, response) => funcionalidadeController.get(request, response));

                this.router!.post("/funcionalidade/:id", (request, response) => funcionalidadeController.update(request, response));

                this.router!.delete("/funcionalidade/:id", (request, response) => funcionalidadeController.delete(request, response));

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
                this.router!.get("/autorizacoes", (request, response) => autorizacaoController.getAll(request, response));

                this.router!.post("/autorizacao/create", (request, response) => autorizacaoController.set(request, response));

                this.router!.get("/autorizacao/:id", (request, response) => autorizacaoController.get(request, response));

                this.router!.post("/autorizacao/:id", (request, response) => autorizacaoController.update(request, response));

                this.router!.delete("/autorizacao/:id", (request, response) => autorizacaoController.delete(request, response));

                resolve();
            } catch (error) {
                console.error(`Erro ao criar rotas da 'autorizacao': ${error}`);
                reject(`Erro ao criar rotas da 'autorizacao': ${error}`);
            }
        });
    }
}

export { Routers };