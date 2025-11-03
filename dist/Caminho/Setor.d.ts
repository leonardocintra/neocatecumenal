import Paroquia from "./Paroquia";
import Regiao from "./Regiao";
export default interface Setor {
    id: number;
    descricao: string;
    ativo: boolean;
    regiao: Regiao;
    paroquias?: Paroquia[];
}
