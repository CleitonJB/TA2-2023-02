import { FuncionalidadeRepository } from './FuncionalidadeRepository';

// Create
describe("Validar testes da criação de uma nova funcionalidade", () => {
    it("Deve criar uma nova funcionalidade com sucesso", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.create({ id: "ddd", descricao: "ddd" } as any)).toEqual(true);
    });

    it("Deve retornar erro no campo 'id' ao tentar criar uma nova funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.create(null as any)).toEqual(new Error("Erro ao criar a funcionalidade: O tipo do parâmetro informado é inválido!"));
    });

    it("Deve retornar erro no campo 'id' ao tentar criar uma nova funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.create({ id: "", descricao: "dasdasd" } as any)).toEqual(new Error("Erro ao criar a funcionalidade: O campo 'id' não foi informado ou é inválido!"));
    });

    it("Deve retornar erro no campo 'descricao' ao tentar criar uma nova funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.create({ id: "dad1", descricao: "" } as any)).toEqual(new Error("Erro ao criar a funcionalidade: O campo 'descricao' não foi informado!"));
    });
});

// GetByID
describe("Validar testes do obter uma funcionalidade pelo id", () => {
    it("Deve retornar true na busca pelo id da funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        funcionalidadeRepo.create({ id: "1", descricao: "dasdasd" });

        expect(funcionalidadeRepo.getByID("1")).not.toBeInstanceOf(Error);
    });

    it("Deve retornar um erro na busca pelo id da funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.getByID("12U3G" as any)).toEqual(new Error(`Erro ao obter a funcionalidade: Funcionalidade com id = '12U3G' não foi encontrada!`));
    });

    it("Deve retornar um erro (id inválido) na busca pelo id da funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.getByID("" as any)).toEqual(new Error(`Erro ao obter a funcionalidade: O campo 'id' não foi informado ou é inválido!`));
    });
});

// GetAll
describe("Validar testes do obter a lista de funcionalidades", () => {
    it("Deve retornar uma lista de funcionalidades", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.getAll()).toBeInstanceOf(Array);
    });
});

// Update
describe("Validar testes do atualizar uma funcionalidade", () => {
    it("Deve retornar true na atualização da funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        funcionalidadeRepo.create({ id: "1", descricao: "dasdasd" });

        expect(funcionalidadeRepo.update("1", { id: "1", descricao: "uuueeeeppaaaaa" })).toBe(true);
    });

    it("Deve retornar um erro na busca pelo id da funcionalidade ao atualizar", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.update("2", { id: "2", descricao: "uuueeeeppaaaaa" })).toEqual(new Error(`Erro ao atualizar a funcionalidade: A funcionalidade com id = '2' não foi encontrada!`));
    });

    it("Deve retornar um erro (id inválido) na busca pelo id da funcionalidade ao atualizar", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.update("", { id: "1", descricao: "uuueeeeppaaaaa" })).toEqual(new Error(`Erro ao atualizar a funcionalidade: O campo 'id' não foi informado ou é inválido!`));
    });

    it("Deve retornar um erro (id inválido) na busca pelo id da funcionalidade ao atualizar", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.update("1", { id: "1", descricao: "" })).toEqual(new Error(`Erro ao atualizar a funcionalidade: O campo 'descricao' não foi informado!`));
    });

    it("Deve retornar um erro (parâmetros inválidos) na busca pelo id da funcionalidade ao atualizar", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.update("", null as any)).toEqual(new Error("Erro ao atualizar a funcionalidade: Um dos parâmetros informados é(são) inválido(s)!"));
    });
});

// Delete
describe("Validar testes do excluir uma funcionalidade", () => {
    it("Deve retornar true na exclusão da funcionalidade", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();
        funcionalidadeRepo.create({ id: "1", descricao: "dasdasd" });

        expect(funcionalidadeRepo.deleteByID("1")).toBe(true);
    });

    it("Deve retornar um erro na busca pelo id da funcionalidade ao excluir", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.deleteByID("")).toEqual(new Error(`Erro ao excluir a funcionalidade: O campo 'id' não foi informado ou é inválido!`));
    });

    it("Deve retornar um erro na busca pelo id da funcionalidade ao excluir", () => {
        const funcionalidadeRepo = new FuncionalidadeRepository();

        expect(funcionalidadeRepo.deleteByID("2")).toEqual(new Error(`Erro ao excluir a funcionalidade: A funcionalidade com id = '2' não foi encontrada!`));
    });
});