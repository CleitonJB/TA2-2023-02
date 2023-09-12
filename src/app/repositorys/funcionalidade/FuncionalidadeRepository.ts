import { FuncionalidadeVM } from '../../models/FuncionalidadeModel'; 

import { IFuncionalidadeRepository } from "../funcionalidade/IFuncionalidadeRepository";

class FuncionalidadeRepository implements IFuncionalidadeRepository<FuncionalidadeVM> {
    private funcionalidadeList: FuncionalidadeVM[];

    constructor() {
        this.funcionalidadeList = [];
    }

    public create(funcionalidade: FuncionalidadeVM): boolean | Error {
        try {
            if(!funcionalidade) throw("O tipo do parâmetro informado é inválido!");
            if(!funcionalidade.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!funcionalidade.descricao) throw("O campo 'descricao' não foi informado!");

            this.funcionalidadeList.push(funcionalidade);

            return true;
        } catch (error: any) {
            return new Error(`Erro ao criar a funcionalidade: ${error}`);
        }
    }

    public getByID(id: string): FuncionalidadeVM | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            const funcionalidadeIndex: number = this.funcionalidadeList.findIndex((funcionalidade: FuncionalidadeVM) => funcionalidade.id === id);

            if(funcionalidadeIndex === -1) {
                throw(`Funcionalidade com id = '${id}' não foi encontrada!`);
            } else {
                return this.funcionalidadeList[funcionalidadeIndex];
            }
        } catch (error: any) {
            return new Error(`Erro ao obter a funcionalidade: ${error}`);
        }
    }

    public getAll(): FuncionalidadeVM[] | Error {
        try {
            return this.funcionalidadeList;
        } catch (error) {
            return new Error(`Erro ao obter a lista de funcionalidades: ${error}`);
        }
    }

    public update(id: string, funcionalidade: FuncionalidadeVM): boolean | Error {
        try {
            if(!funcionalidade) throw("Um dos parâmetros informados é(são) inválido(s)!");
            if(!id || !funcionalidade.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!funcionalidade.descricao) throw("O campo 'descricao' não foi informado!");

            const autorizacaoIndex: number = this.funcionalidadeList.findIndex((funcionalidade: FuncionalidadeVM) => funcionalidade.id === id);

            if(autorizacaoIndex === -1) {
                throw(`A funcionalidade com id = '${id}' não foi encontrada!`);
            } else {
                this.funcionalidadeList[autorizacaoIndex].descricao = funcionalidade.descricao;
                return true;
            }
        } catch (error: any) {
            return new Error(`Erro ao atualizar a funcionalidade: ${error}`);
        }
    }

    public deleteByID(id: string): boolean | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            const autorizacaoIndex: number = this.funcionalidadeList.findIndex((funcionalidade: FuncionalidadeVM) => funcionalidade.id === id);

            if(autorizacaoIndex === -1) {
                throw(`A funcionalidade com id = '${id}' não foi encontrada!`);
            } else {
                this.funcionalidadeList.splice(autorizacaoIndex, 1);
                return true;
            }
        } catch (error: any) {
            return new Error(`Erro ao excluir a funcionalidade: ${error}`);
        }
    }
}

export { FuncionalidadeRepository };