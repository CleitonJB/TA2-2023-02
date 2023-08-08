import { AutorizacaoVM } from "src/app/models/AutorizacaoModel";

import { IAutorizacaoRepository } from "./IAutorizacaoRepository";

class AutorizacaoRepository implements IAutorizacaoRepository<AutorizacaoVM> {
    private autorizacaoList: AutorizacaoVM[];
    
    constructor() 
    {
        this.autorizacaoList = [];
    }

    public create(autorizacao: AutorizacaoVM): boolean | Error {
        try {
            if(!autorizacao) throw("O tipo do parâmetro não foi informado ou é inválido!");
            if(!autorizacao.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!autorizacao.role) throw("O campo 'role' não foi informado ou é inválido!");
            if(!autorizacao.funcionalidade) throw("O campo 'funcionalidade' não foi informado ou é inválido!");

            this.autorizacaoList.push(autorizacao);

            return true;
        } catch (error) {
            return new Error(`Erro ao criar a autorização: ${error}`);
        }
    }
    
    public getByID(id: string): AutorizacaoVM | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");

            const autorizacaoIndex: number = this.autorizacaoList.findIndex((autorizacao: AutorizacaoVM) => autorizacao.id === id);

            if(autorizacaoIndex === -1) {
                throw(`A autorização com id = '${id}' não foi encontrada!`);
            } else {
                return this.autorizacaoList[autorizacaoIndex];
            }
        } catch (error) {
            return new Error(`Erro ao obter a autorização: ${error}`);
        }
    }
    
    public getAll(): AutorizacaoVM[] | Error {
        try {
            return this.autorizacaoList;
        } catch (error) {
            return new Error(`Erro ao obter a lista de autorizações: ${error}`);
        }
    }
    
    public update(id: string, autorizacao: AutorizacaoVM): boolean | Error {
        try {
            if(!id) throw("Um dos parâmetros informados é(são) inválido(s)!");
            if(!id || !autorizacao.id) throw("O campo 'id' não foi informado ou é inválido!");
            if(!autorizacao.role) throw("O campo 'role' não foi informado ou é inválido!");
            if(!autorizacao.funcionalidade) throw("O campo 'funcionalidade' não foi informado ou é inválido!");
            
            const autorizacaoIndex: number = this.autorizacaoList.findIndex((autorizacao: AutorizacaoVM) => autorizacao.id === id);

            if(autorizacaoIndex === -1) {
                throw(`A autorização com id = '${id}' não foi encontrada!`);
            } else {
                this.autorizacaoList[autorizacaoIndex].role = autorizacao.role;
                this.autorizacaoList[autorizacaoIndex].funcionalidade = autorizacao.funcionalidade;
                return true;
            }
        } catch (error) {
            return new Error(`Erro ao atualizar a autorização: ${error}`);
        }
    }
    
    public deleteByID(id: string): boolean | Error {
        try {
            if(!id) throw("O campo 'id' não foi informado ou é inválido!");
            
            const autorizacaoIndex: number = this.autorizacaoList.findIndex((autorizacao: AutorizacaoVM) => autorizacao.id === id);

            if(autorizacaoIndex === -1) {
                throw(`A autorização com id = '${id}' não foi encontrada!`);
            } else {
                this.autorizacaoList.splice(autorizacaoIndex, 1);
                return true;
            }
        } catch (error) {
            return new Error(`Erro ao excluir a autorização: ${error}`);
        }
    }
}

export { AutorizacaoRepository };