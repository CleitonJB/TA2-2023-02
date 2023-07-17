interface IUserRepository<UserType> {
    register(user: UserType): boolean | Error; //set
    login(user: UserType): UserType | Error;    //get
    getAll(): Partial<UserType[]> | Error;     // Partial pq o campo 'senha' não deve ser retornado
    update(userID: string, user: UserType): boolean | Error;
    delete(userID: string): boolean | Error;
}

export { IUserRepository };