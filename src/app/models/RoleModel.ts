import { Request, Response } from "express";

import { RequestResponseVM } from "./RequestResponseVM";

export type RoleVM = {
    id: string;
    descricao: string;
}

export interface IRoleModel<RoleVM> {
    getAll(request: Request, response: Response): Response<RequestResponseVM>;
    get(request: Request, response: Response): Response<RequestResponseVM>;
    set(request: Request, response: Response): Response<RequestResponseVM>;
    update(request: Request, response: Response): Response<RequestResponseVM>;
    delete(request: Request, response: Response): Response<RequestResponseVM>;
}