import express from 'express';

import { Routers } from "./router";

import { UserRepository } from "../repositorys/user/UserRepository";
import { RoleRepository } from "../repositorys/role/RoleRepository";
import { AutorizacaoRepository } from "../repositorys/autorizacao/AutorizacaoRepository";
import { FuncionalidadeRepository } from "../repositorys/funcionalidade/FuncionalidadeRepository";

import { UserController } from "../controllers/user/UserController";
import { RoleController } from "../controllers/role/RoleController";
import { AutorizacaoController } from "../controllers/autorizacao/AutorizacaoController";
import { FuncionalidadeController } from "../controllers/funcionalidade/FuncionalidadeController";

async function RouterFactory(): Promise<express.Router> {
    try {
        const userRepository: UserRepository = new UserRepository();
        const userController: UserController = new UserController(userRepository);

        const roleRepository: RoleRepository = new RoleRepository();
        const roleController: RoleController = new RoleController(roleRepository);

        const autorizacaoRepository: AutorizacaoRepository = new AutorizacaoRepository();
        const autorizacaoController: AutorizacaoController = new AutorizacaoController(autorizacaoRepository);

        const funcionalidadeRepository: FuncionalidadeRepository = new FuncionalidadeRepository();
        const funcionalidadeController: FuncionalidadeController = new FuncionalidadeController(funcionalidadeRepository);

        const router = new Routers(userController, roleController, autorizacaoController, funcionalidadeController);

        const handlerResponse: express.Router | Error = await router.handlerCreateRoutes();

        if(handlerResponse instanceof Error) {
            throw(`(RouterFactory): ${handlerResponse}`);
        } else {
            return handlerResponse as express.Router;
        }
    } catch (error) {
        console.error(error);
        throw(error);
    }
}

export { RouterFactory };