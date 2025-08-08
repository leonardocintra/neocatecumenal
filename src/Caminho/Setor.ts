import MacroRegiao from "./MacroRegiao";

export default interface Setor {
  id: number;
  descricao: string;
  ativo: boolean;
  macroRegiao: MacroRegiao;
}
