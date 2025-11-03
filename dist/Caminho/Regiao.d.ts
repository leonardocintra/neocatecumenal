import MacroRegiao from "./MacroRegiao";
import Setor from "./Setor";
export default interface Regiao {
    id: number;
    descricao: string;
    ativo: boolean;
    macroRegiao: MacroRegiao;
    setores?: Setor[];
}
