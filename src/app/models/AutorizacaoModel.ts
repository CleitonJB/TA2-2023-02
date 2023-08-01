import { RoleVM } from "./RoleModel";
import { FuncionalidadeVM } from "./FuncionalidadeModel";

export type AutorizacaoVM = {
    id: string;
    role: RoleVM;
    funcionalidade: FuncionalidadeVM;
}