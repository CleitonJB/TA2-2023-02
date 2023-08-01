interface IAutorizacaoRepository<AutorizacaoType> {
    create(autorizacao: AutorizacaoType): boolean | Error;
    getByID(id: string): AutorizacaoType | Error;
    getAll(): AutorizacaoType[] | Error;
    update(id: string, autorizacao: AutorizacaoType): boolean | Error;
    deleteByID(id: string): boolean | Error;
}

export { IAutorizacaoRepository };