import { EtapaEnum } from "../Commons/Enums";
import ComunidadeEtapa from "./ComunidadeEtapa";
import Paroquia from "./Paroquia";

export default interface Comunidade {
  id: number;
  numeroDaComunidade: number;
  quantidadeMembros: number;
  paroquia: Paroquia;
  etapaAtual: EtapaEnum;
  comunidadeEtapas: ComunidadeEtapa[];
  observacao?: string;
}
