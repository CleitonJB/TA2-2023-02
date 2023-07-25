import { FuncionalidadeVM } from '../../models/FuncionalidadeModel'; 

import { IFuncionalidadeRepository } from "../funcionalidade/IFuncionalidadeRepository";

class FuncionalidadeRepository implements IFuncionalidadeRepository<FuncionalidadeVM> {
    private funcionalidade: FuncionalidadeVM | null;

    constructor() {
        this.funcionalidade = null;
    }

    public create(funcionalidade: FuncionalidadeVM): boolean | Error {
        try {
            if(!funcionalidade) throw("O tipo do parâmetro informado é inválido!");
            if(!funcionalidade.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!funcionalidade.descricao) throw("O campo 'descricao' não foi informado!");

            this.funcionalidade = JSON.parse(JSON.stringify(funcionalidade));

            return true;
        } catch (error: any) {
            return new Error(error);
        }
    }

    public getByID(id: string): FuncionalidadeVM | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            if(id !== this.funcionalidade?.id) throw(`Funcionalidade com id = '${id}' não foi encontrada!`);

            return this.funcionalidade;
        } catch (error: any) {
            return new Error(error);
        }
    }

    public getAll(): FuncionalidadeVM[] {
        return [
            {
                id: "1",
                descricao: "funcionalidadezinha fixo 1"
            },
            {
                id: "2",
                descricao: "funcionalidadezinha fixo 2"
            }
        ];
    }

    public update(id: string, funcionalidade: FuncionalidadeVM): boolean | Error {
        try {
            if(!funcionalidade) throw("Um dos parâmetros informados é(são) inválido(s)!");
            if(!id || !funcionalidade.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!funcionalidade.descricao) throw("O campo 'descricao' não foi informado!");

            if(id === this.funcionalidade?.id) {
                this.funcionalidade.descricao = funcionalidade.descricao;
            } else {
                throw(`Funcionalidade com id = '${id}' não foi encontrada!`);
            }

            return true;
        } catch (error: any) {
            return new Error(error);
        }
    }

    public deleteByID(id: string): boolean | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            if(id === this.funcionalidade?.id) {
                this.funcionalidade = null;
            } else {
                throw(`Funcionalidade com id = '${id}' não foi encontrada!`);
            }

            return true;
        } catch (error: any) {
            return new Error(error);
        }
    }
}

export { FuncionalidadeRepository };