import Diocese from "./Diocese";
import Endereco from "./Endereco";
import Setor from "./Setor";

export default interface Paroquia {
  id: number;
  descricao: string;
  diocese: Diocese;
  endereco: Endereco;
  setor: Setor;
  observacao?: string;
}
