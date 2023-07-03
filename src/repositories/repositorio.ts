import { IRepositorio } from './contratos/irepositorio';

class Repositorio implements IRepositorio {
    get() {
        console.log('repositorio')
        return 'oi';
    }
}

export { Repositorio };