import ComunidadeEtapa from "./ComunidadeEtapa";
import Paroquia from "./Paroquia";
export default interface Comunidade {
    id: number;
    numeroDaComunidade: number;
    quantidadeMembros: number;
    paroquia: Paroquia;
    comunidadeEtapas: ComunidadeEtapa[];
    observacao?: string;
}
