import Diocese from "./Diocese";
import Endereco from "./Endereco";

export default interface Paroquia {
  id: number;
  descricao: string;
  diocese: Diocese;
  endereco: Endereco;
  observacao?: string;
}
