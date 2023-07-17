import { UserVM } from 'src/app/models/UserModel';
import { UserRepository } from './UserRepository';

// Create
describe("Validar testes da criação de um novo usuário", () => {
    it("Deve criar um novo usuário com sucesso", () => {
        const userRepo = new UserRepository();

        const newUser: UserVM = {
            id:    "7n42g48932",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "ade12e12c31231", descricao: "teste" },
        };

        expect(userRepo.register(newUser as any)).toEqual(true);
    });

    it("Deve retornar erro (já existe) ao tentar criar um novo usuário", () => {
        const userRepo = new UserRepository();
        userRepo.register({
            id:    "7n42g48932",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "ade12e12c31231", descricao: "teste" },
        } as any)

        expect(userRepo.register({
            id:    "7n42g48932",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "ade12e12c31231", descricao: "teste" },
        } as any)).toEqual(new Error("Erro ao cadastrar usuário: O usuário já está cadastrado!"));
    });

    it("Deve retornar erro ao tentar criar um novo usuário", () => {
        const userRepo = new UserRepository();

        expect(userRepo.register(null as any)).toEqual(new Error("Erro ao cadastrar usuário: Os dados informados do usuário são inválidos!"));
    });

    it("Deve retornar erro no campo 'id' ao tentar criar um novo usuário", () => {
        const userRepo = new UserRepository();

        expect(userRepo.register({
            id:    "",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "ade12e12c31231", descricao: "teste" },
        } as any)).toEqual(new Error("Erro ao cadastrar usuário: O campo 'id' não foi informado ou é inválido!"));
    });

    it("Deve retornar erro no campo 'nome' ao tentar criar um novo usuário", () => {
        const userRepo = new UserRepository();

        expect(userRepo.register({
            id:    "7n42g48932",
            nome:  "",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "ade12e12c31231", descricao: "teste" },
        } as any)).toEqual(new Error("Erro ao cadastrar usuário: O campo 'nome' não foi informado ou é inválido!"));
    });

    it("Deve retornar erro no campo 'email' ao tentar criar um novo usuário", () => {
        const userRepo = new UserRepository();

        expect(userRepo.register({
            id:    "7n42g48932",
            nome:  "Cleiton",
            email: "",
            senha: "123",
            role:  { id: "ade12e12c31231", descricao: "teste" },
        } as any)).toEqual(new Error("Erro ao cadastrar usuário: O campo 'email' não foi informado ou é inválido!"));
    });

    it("Deve retornar erro no campo 'senha' ao tentar criar um novo usuário", () => {
        const userRepo = new UserRepository();

        expect(userRepo.register({
            id:    "7n42g48932",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "",
            role:  { id: "ade12e12c31231", descricao: "teste" },
        } as any)).toEqual(new Error("Erro ao cadastrar usuário: O campo 'senha' não foi informado ou é inválido!"));
    });

    it("Deve retornar erro no campo 'role' ao tentar criar um novo usuário", () => {
        const userRepo = new UserRepository();

        expect(userRepo.register({
            id:    "7n42g48932",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  null,
        } as any)).toEqual(new Error("Erro ao cadastrar usuário: O campo 'role' não foi informado ou é inválido!"));
    });
});

// Login ou GetById
describe("Validar testes do obter um usuário pelo id", () => {
    it("Deve retornar true na busca pelo usuário", () => {
        const userRepo = new UserRepository();
        const newUser: any = {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", describe: "hu12uh12v3v128" },
        };

        userRepo.register({
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        });

        expect(userRepo.login(newUser)).not.toBeInstanceOf(Error);
    });

    it("Deve retornar error (não cadastrado) na busca pelo usuário", () => {
        const userRepo = new UserRepository();
        const newUser: any = {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        };

        //userRepo.register(newUser);

        expect(userRepo.login(newUser)).toEqual(new Error(`Erro ao obter usuário: Não há usuários cadastrados!`));
    });

    it("Deve retornar um erro na busca pelo usuário", () => {
        const userRepo = new UserRepository();
        const newUser: any = {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        };

        userRepo.register(JSON.parse(JSON.stringify(newUser)));

        expect(userRepo.login({
            id:    "2",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        } as any)).toEqual(new Error(`Erro ao obter usuário: O usuário informado não existe!`));
    });

    it("Deve retornar um erro (dados inválidos) na busca pelo id do usuário", () => {
        const userRepo = new UserRepository();

        expect(userRepo.login(null as any)).toEqual(new Error(`Erro ao obter usuário: Os dados informados do usuário são inválidos!`));
    });
});

// GetAll
describe("Validar testes do obter a lista de usuários", () => {
    it("Deve retornar uma lista de usuários", () => {
        const userRepo = new UserRepository();

        expect(userRepo.getAll()).toBeInstanceOf(Array);
    });
});

// Update
describe("Validar testes do atualizar um usuário", () => {
    it("Deve retornar true na atualização do usuário", () => {
        const userRepo = new UserRepository();
        const newUser: any = {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        };

        userRepo.register(newUser);

        expect(userRepo.update("1", newUser)).toBe(true);
    });

    it("Deve retornar error (dados inconsistentes) na atualização do usuário", () => {
        const userRepo = new UserRepository();
        const newUser: any = {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        };

        expect(userRepo.update("2", newUser)).toEqual(new Error(`Erro ao atualizar os dados do usuário: Os dados informados não são consistêntes!`));
    });

    it("Deve retornar um erro na busca pelo id do usuário ao atualizar", () => {
        const userRepo = new UserRepository();
        const newUser: any = {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        };

        expect(userRepo.update("1", newUser)).toEqual(new Error(`Erro ao atualizar os dados do usuário: O usuário informado não existe!`));
    });

    it("Deve retornar um erro (id inválido) na busca pelo id do usuário ao atualizar", () => {
        const userRepo = new UserRepository();

        expect(userRepo.update("", {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        } as any)).toEqual(new Error(`Erro ao atualizar os dados do usuário: O campo 'id' não foi informado ou é inválido!`));
    });

    it("Deve retornar um erro (parâmetros inválidos) na busca pelo id do usuário ao atualizar", () => {
        const userRepo = new UserRepository();

        expect(userRepo.update("1", null as any)).toEqual(new Error("Erro ao atualizar os dados do usuário: Os dados informados do usuário são inválidos!"));
    });
});

// Delete
describe("Validar testes do excluir um usuário", () => {
    it("Deve retornar true na exclusão de um usuário", () => {
        const userRepo = new UserRepository();
        const newUser: any = {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        };

        userRepo.register(newUser);

        expect(userRepo.delete("1")).toBe(true);
    });

    it("Deve retornar um erro na busca pelo id de um usuário ao excluir", () => {
        const userRepo = new UserRepository();
        const newUser: any = {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        };
        
        userRepo.register(newUser);

        expect(userRepo.delete("")).toEqual(new Error(`Erro ao excluir os dados do usuário: O campo 'id' não foi informado ou é inválido!`));
    });

    it("Deve retornar um erro na busca pelo id de um usuário ao excluir", () => {
        const userRepo = new UserRepository();
        const newUser: any = {
            id:    "1",
            nome:  "Cleiton",
            email: "cleitonbraga56@gmail.com",
            senha: "123",
            role:  { id: "13111", descricao: "hu12uh12v3v128" },
        };
        
        userRepo.register(newUser);

        expect(userRepo.delete("2")).toEqual(new Error(`Erro ao excluir os dados do usuário: O usuário informado não existe!`));
    });
});