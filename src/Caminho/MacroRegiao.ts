import Regiao from "./Regiao";

export default interface MacroRegiao {
  id: number;
  descricao: string;
  ativo: boolean;
  regioes?: Regiao[];
}
