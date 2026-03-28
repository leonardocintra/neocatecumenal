import { EtapaEnum } from "../Commons/Enums";

export default interface ComunidadePessoa {
  id: number;
  comunidadeId: number;
  pessoaId: number;
  etapa: EtapaEnum;
}
