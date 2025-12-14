import { TipoEquipe } from "../Configuracao";
import Pessoa from "./Pessoa";

export default interface Equipe {
  id: number;
  descricao: string;
  tipoEquipe: TipoEquipe;
  pessoas: Pessoa[];
  observacao?: string;
  createdAt: Date;
  updatedAt: Date;
}
