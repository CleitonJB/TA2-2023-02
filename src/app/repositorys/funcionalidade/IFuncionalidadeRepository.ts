interface IFuncionalidadeRepository<FuncionalidadeType> {
    create(role: FuncionalidadeType): boolean | Error;
    getByID(id: string): FuncionalidadeType | Error;
    getAll(): FuncionalidadeType[];
    update(id: string, role: FuncionalidadeType): boolean | Error;
    deleteByID(id: string): boolean | Error;
}

export { IFuncionalidadeRepository };