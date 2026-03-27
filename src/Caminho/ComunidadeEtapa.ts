import { EtapaEnum } from "../Commons/Enums";
import Equipe from "./Equipe";

export default interface ComunidadeEtapa {
  id: number;
  comunidadeId: number;
  etapa: EtapaEnum;
  equipe?: Equipe;
  dataInicio?: Date;
  dataFim?: Date;
  localConvivencia?: string;
  observacao?: string;
  createdAt: Date;
  updatedAt: Date;
}
