import { AutorizacaoRepository } from './AutorizacaoRepository';

class RoleRepoStub {
    public get(): any {
        return { id: "1", descricao: "role 1" };
    }
}

class FuncionalidadeRepoStub {
    public get(): any {
        return { id: "1", descricao: "func 1" };
    }
}

// Create
describe("Validar testes da criação de uma nova autorizacao", () => {
    it("Deve criar uma nova autorizacao com sucesso", () => {
        const roleStub = new RoleRepoStub();
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.create({ id: "1", role: roleStub.get(), funcionalidade: funcionalidadeStub.get() })).toEqual(true);
    });

    it("Deve retornar erro nos parâmetros ao tentar criar uma nova autorizacao", () => {
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.create(null as any)).toEqual(new Error("Erro ao criar a autorização: O tipo do parâmetro não foi informado ou é inválido!"));
    });

    it("Deve retornar erro no campo 'id' ao tentar criar uma nova autorizacao", () => {
        const roleStub = new RoleRepoStub();
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.create({ id: "", role: roleStub.get(), funcionalidade: funcionalidadeStub.get() })).toEqual(new Error("Erro ao criar a autorização: O campo 'id' não foi informado ou é inválido!"));
    });

    it("Deve retornar erro no campo 'role' ao tentar criar uma nova autorizacao", () => {
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.create({ id: "1", role: null, funcionalidade: funcionalidadeStub.get() } as any)).toEqual(new Error("Erro ao criar a autorização: O campo 'role' não foi informado ou é inválido!"));
    });

    it("Deve retornar erro no campo 'funcionalidade' ao tentar criar uma nova autorizacao", () => {
        const roleStub = new RoleRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.create({ id: "1", role: roleStub.get(), funcionalidade: null } as any)).toEqual(new Error("Erro ao criar a autorização: O campo 'funcionalidade' não foi informado ou é inválido!"));
    });
});

// GetByID
describe("Validar testes do obter uma autorizacao pelo id", () => {
    it("Deve retornar true na busca pelo id da autorizacao", () => {
        const roleStub = new RoleRepoStub();
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();
        autorizacaoRepo.create({ id: "1", role: roleStub.get(), funcionalidade: funcionalidadeStub.get() });

        expect(autorizacaoRepo.getByID("1")).not.toBeInstanceOf(Error);
    });

    it("Deve retornar um erro na busca pelo id da autorizacao", () => {
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.getByID("12U3G")).toEqual(new Error(`Erro ao obter a autorização: A autorização com id = '12U3G' não foi encontrada!`));
    });

    it("Deve retornar um erro (id inválido) na busca pelo id da autorizacao", () => {
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.getByID("")).toEqual(new Error(`Erro ao obter a autorização: O campo 'id' não foi informado ou é inválido!`));
    });
});

// GetAll
describe("Validar testes do obter a lista de autorizacaos", () => {
    it("Deve retornar uma lista de autorizacaos", () => {
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.getAll()).toBeInstanceOf(Array);
    });
});

// Update
describe("Validar testes do atualizar uma autorizacao", () => {
    it("Deve retornar true na atualização da autorizacao", () => {
        const roleStub = new RoleRepoStub();
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();
        autorizacaoRepo.create({ id: "1", role: roleStub.get(), funcionalidade: funcionalidadeStub.get() });

        expect(autorizacaoRepo.update("1", { id: "1", role: roleStub.get(), funcionalidade: funcionalidadeStub.get() })).toBe(true);
    });

    it("Deve retornar um erro na busca pelo id da autorizacao ao atualizar", () => {
        const roleStub = new RoleRepoStub();
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.update("2", { id: "2", role: roleStub.get(), funcionalidade: funcionalidadeStub.get() })).toEqual(new Error(`Erro ao atualizar a autorização: A autorização com id = '2' não foi encontrada!`));
    });

    it("Deve retornar um erro (role inválido) na busca pelo id da autorizacao ao atualizar", () => {
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.update("1", { id: "1", role: null, funcionalidade: funcionalidadeStub.get() } as any)).toEqual(new Error(`Erro ao atualizar a autorização: O campo 'role' não foi informado ou é inválido!`));
    });

    it("Deve retornar um erro (funcionalidade inválido) na busca pelo id da autorizacao ao atualizar", () => {
        const roleStub = new RoleRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.update("1", { id: "1", role: roleStub.get(), funcionalidade: null } as any)).toEqual(new Error(`Erro ao atualizar a autorização: O campo 'funcionalidade' não foi informado ou é inválido!`));
    });
    
    it("Deve retornar um erro nos parâmetros na busca pelo id da autorizacao ao atualizar", () => {
        const roleStub = new RoleRepoStub();
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.update("", { id: "1", role: roleStub.get(), funcionalidade: funcionalidadeStub.get() })).toEqual(new Error(`Erro ao atualizar a autorização: Um dos parâmetros informados é(são) inválido(s)!`));
    });

    it("Deve retornar um erro (parâmetros inválidos) na busca pelo id da autorizacao ao atualizar", () => {
        const roleStub = new RoleRepoStub();
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.update("", null as any)).toEqual(new Error("Erro ao atualizar a autorização: Um dos parâmetros informados é(são) inválido(s)!"));
    });
});

// Delete
describe("Validar testes do excluir uma autorizacao", () => {
    it("Deve retornar true na exclusão da autorizacao", () => {
        const roleStub = new RoleRepoStub();
        const funcionalidadeStub = new FuncionalidadeRepoStub();
        const autorizacaoRepo = new AutorizacaoRepository();

        autorizacaoRepo.create({ id: "1", role: roleStub.get(), funcionalidade: funcionalidadeStub.get() });

        expect(autorizacaoRepo.deleteByID("1")).toBe(true);
    });

    it("Deve retornar um erro na busca pelo id da autorizacao ao excluir", () => {
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.deleteByID("")).toEqual(new Error(`Erro ao excluir a autorização: O campo 'id' não foi informado ou é inválido!`));
    });

    it("Deve retornar um erro na busca pelo id da autorizacao ao excluir", () => {
        const autorizacaoRepo = new AutorizacaoRepository();

        expect(autorizacaoRepo.deleteByID("2")).toEqual(new Error(`Erro ao excluir a autorização: A autorização com id = '2' não foi encontrada!`));
    });
});