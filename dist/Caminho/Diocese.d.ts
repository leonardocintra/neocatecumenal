import { TipoDiocese } from "../Configuracao";
import Endereco from "./Endereco";
import Setor from "./Setor";
export default interface Diocese {
    id: number;
    descricao: string;
    tipoDiocese: TipoDiocese;
    endereco: Endereco;
    setor: Setor;
    observacao?: string;
}
