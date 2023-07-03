interface IUseCase<Parametros> {
    perform(params: Parametros) : string | Error;
}

export { IUseCase };