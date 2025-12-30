import { EtapaEnum } from "../Commons/Enums";
export default interface ComunidadeEtapa {
    id: number;
    comunidadeId: number;
    etapa: EtapaEnum;
    dataInicio?: Date;
    dataFim?: Date;
    observacao?: string;
}
