import { Request, Response } from 'express';

import { RoleVM } from "./RoleModel";
import { FuncionalidadeVM } from "./FuncionalidadeModel";
import { RequestResponseVM } from "./RequestResponseVM";

export type AutorizacaoVM = {
    id: string;
    role: RoleVM;
    funcionalidade: FuncionalidadeVM;
}

export interface IAutorizacaoModel<AutorizacaoVM> {
    getAll(request: Request, response: Response): Response<RequestResponseVM>;
    get(request: Request, response: Response): Response<RequestResponseVM>;
    set(request: Request, response: Response): Response<RequestResponseVM>;
    update(request: Request, response: Response): Response<RequestResponseVM>;
    delete(request: Request, response: Response): Response<RequestResponseVM>;
}