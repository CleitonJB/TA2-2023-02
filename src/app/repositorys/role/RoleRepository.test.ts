import { RoleRepository } from './RoleRepository';

// Create
describe("Validar testes da criação de uma nova role", () => {
    it("Deve criar uma nova role com sucesso", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.create({ id: "ddd", descricao: "ddd" } as any)).toEqual(true);
    });

    it("Deve retornar erro no campo 'id' ao tentar criar uma nova role", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.create(null as any)).toEqual(new Error("O tipo do parâmetro informado é inválido!"));
    });

    it("Deve retornar erro (já cadastrada) ao tentar criar uma nova role", () => {
        const roleRepo = new RoleRepository();

        roleRepo.create({ id: "1", descricao: "role 1" });

        expect(roleRepo.create({ id: "1", descricao: "dasdasd" } as any)).toEqual(new Error("A role já está cadastrada!"));
    });

    it("Deve retornar erro no campo 'id' ao tentar criar uma nova role", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.create({ id: "", descricao: "dasdasd" } as any)).toEqual(new Error("O campo 'id' não foi informado ou é inválido!"));
    });

    it("Deve retornar erro no campo 'descricao' ao tentar criar uma nova role", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.create({ id: "dad1", descricao: "" } as any)).toEqual(new Error("O campo 'descricao' não foi informado!"));
    });
});

// GetByID
describe("Validar testes do obter uma role pelo id", () => {
    it("Deve retornar true na busca pelo id da role", () => {
        const roleRepo = new RoleRepository();
        roleRepo.create({ id: "1", descricao: "dasdasd" });

        expect(roleRepo.getByID("1")).not.toBeInstanceOf(Error);
    });

    it("Deve retornar um erro na busca pelo id da role", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.getByID("12U3G" as any)).toEqual(new Error(`Role com id = '12U3G' não foi encontrada!`));
    });

    it("Deve retornar um erro (id inválido) na busca pelo id da role", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.getByID("" as any)).toEqual(new Error(`O campo 'id' não foi informado ou é inválido!`));
    });
});

// GetAll
describe("Validar testes do obter a lista de roles", () => {
    it("Deve retornar uma lista de roles", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.getAll()).toBeInstanceOf(Array);
    });
});

// Update
describe("Validar testes do atualizar uma role", () => {
    it("Deve retornar true na atualização da role", () => {
        const roleRepo = new RoleRepository();
        roleRepo.create({ id: "1", descricao: "dasdasd" });

        expect(roleRepo.update("1", { id: "1", descricao: "uuueeeeppaaaaa" })).toBe(true);
    });

    it("Deve retornar um erro na busca pelo id da role ao atualizar", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.update("2", { id: "2", descricao: "uuueeeeppaaaaa" })).toEqual(new Error(`Role com id = '2' não foi encontrada!`));
    });

    it("Deve retornar um erro (id inválido) na busca pelo id da role ao atualizar", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.update("", { id: "1", descricao: "uuueeeeppaaaaa" })).toEqual(new Error(`O campo 'id' não foi informado ou é inválido!`));
    });

    it("Deve retornar um erro (id inválido) na busca pelo id da role ao atualizar", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.update("1", { id: "1", descricao: "" })).toEqual(new Error(`O campo 'descricao' não foi informado!`));
    });

    it("Deve retornar um erro (parâmetros inválidos) na busca pelo id da role ao atualizar", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.update("", null as any)).toEqual(new Error("Um dos parâmetros informados é(são) inválido(s)!"));
    });
});

// Delete
describe("Validar testes do excluir uma role", () => {
    it("Deve retornar true na exclusão da role", () => {
        const roleRepo = new RoleRepository();
        roleRepo.create({ id: "1", descricao: "dasdasd" });

        expect(roleRepo.deleteByID("1")).toBe(true);
    });

    it("Deve retornar um erro na busca pelo id da role ao excluir", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.deleteByID("")).toEqual(new Error(`O campo 'id' não foi informado ou é inválido!`));
    });

    it("Deve retornar um erro na busca pelo id da role ao excluir", () => {
        const roleRepo = new RoleRepository();

        expect(roleRepo.deleteByID("2")).toEqual(new Error(`Role com id = '2' não foi encontrada!`));
    });
});