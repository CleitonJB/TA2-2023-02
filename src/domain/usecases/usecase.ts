import { IRepositorio } from '../../repositories/contratos/irepositorio';

import { IUseCase } from '../contratos/iusecase';

export type Usecase_Params = {
    id: string;
}

class UseCase implements IUseCase<Usecase_Params> {
    repo: IRepositorio;
    constructor(repo: IRepositorio) {
        this.repo = repo;
    }
    perform(params: Usecase_Params ): string | Error {
        console.log('use case');
        // const { id } = params;
        const id = params.id;
        if (id === '-1') {
            throw new Error('id inválido');
        }
        
        return this.repo.get();
    }
}

export { UseCase };