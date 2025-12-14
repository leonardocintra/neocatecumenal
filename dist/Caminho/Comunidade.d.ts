import Paroquia from "./Paroquia";
export default interface Comunidade {
    id: number;
    descricao: string;
    numeroDaComunidade: number;
    quantidadeMembros: number;
    paroquia: Paroquia;
    observacao?: string;
}
