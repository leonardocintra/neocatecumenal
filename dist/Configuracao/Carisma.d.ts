import { TipoCarismaEnum } from "../Commons/Enums";
export default interface Carisma {
    id: number;
    descricao: string;
    tipo: TipoCarismaEnum;
    casalAndaJunto: boolean;
}
