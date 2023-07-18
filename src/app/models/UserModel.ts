import { Request, Response } from "express";

import { RoleVM } from "./RoleModel";
import { RequestResponseVM } from "./RequestResponseVM";

export type UserVM = {
    id: string;
    nome: string;
    email: string;
    senha: string;
    role: RoleVM;
}

export interface IUserModel<UserVM> {
    get(request: Request, response: Response): Response<RequestResponseVM>;
    set(request: Request, response: Response): Response<RequestResponseVM>;
    update(request: Request, response: Response): Response<RequestResponseVM>;
    delete(request: Request, response: Response): Response<RequestResponseVM>;
}