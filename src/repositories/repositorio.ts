import { IRepositorio } from './contratos/irepositorio';

class Repositorio implements IRepositorio {
    public get(): string {
        console.log('repositorio');
        return 'oi';
    }
}

export { Repositorio };