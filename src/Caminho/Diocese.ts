import { TipoDiocese } from "../Configuracao";
import Endereco from "./Endereco";

export default interface Diocese {
  id: number;
  descricao: string;
  tipoDiocese: TipoDiocese;
  endereco: Endereco;
  observacao?: string;
}
