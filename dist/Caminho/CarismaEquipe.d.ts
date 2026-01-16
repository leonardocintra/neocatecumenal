import { TipoCarismaEnum } from "../Commons/Enums";
export default interface CarismaEquipe {
    id: number;
    pessoa: {
        id: number;
        nome: string;
        casal: boolean;
    };
    carisma: {
        id: number;
        descricao: string;
        tipo: TipoCarismaEnum;
    };
}
