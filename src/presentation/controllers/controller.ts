import { Request, Response } from 'express';
import { IUseCase } from '../../domain/contratos/iusecase';
import { Usecase_Params } from '../../domain/usecases/usecase'

class Controlador {
    private usecase: IUseCase<Usecase_Params>;

    constructor(usecase: IUseCase<Usecase_Params>) {
        console.log("contruiu o controller");
        this.usecase = usecase;
    }

    public handler(req: Request, resp: Response): Response<any> {
        console.log('chegou requisição')
        const retorno = this.usecase.perform({ id: '1000' });
        
        if(retorno instanceof Error) {
            return resp.status(400).json({ message: retorno.message }).end();
        }

        return resp.json({ message: retorno}).end();
    }
}

export { Controlador };