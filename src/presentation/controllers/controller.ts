import { Request, Response } from 'express';
import { IUseCase } from '../../domain/contratos/iusecase';
import { Usecase_Params } from '../../domain/usecases/usecase'

class Controlador {
    usecase: IUseCase<Usecase_Params>;
    constructor(usecase: IUseCase<Usecase_Params>) {
        console.log("contruiu o controller")
        this.usecase = usecase;
    }

    handler(req: Request, resp: Response) {
        console.log('chegou requisição')
        const retorno = this.usecase.perform({ id: '1000' });
        if (retorno instanceof Error) {
            return resp.status(400).json({ message: retorno.message }).end();
        }
        resp.json({ message: retorno}).end();
    }
}

export { Controlador };