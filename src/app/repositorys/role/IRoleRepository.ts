interface IRoleRepository<RoleType> {
    create(role: RoleType): boolean | Error;
    getByID(id: string): RoleType | Error;
    getAll(): RoleType[];
    update(id: string, role: RoleType): boolean | Error;
    deleteByID(id: string): boolean | Error;
}

export { IRoleRepository };