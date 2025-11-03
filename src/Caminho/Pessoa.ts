import Endereco from "./Endereco";
import PessoaConjugue from "./PessoaConjugue";
import SituacaoReligiosa from "../Configuracao/SituacaoReligiosa";
import {
  CarismaPrimitivo,
  CarismaServico,
  CarismaVinculado,
} from "../Configuracao";

export default interface Pessoa {
  id: number;
  externalId: string;
  nome: string;
  conhecidoPor?: string;
  cpf: string;
  sexo: string;
  nacionalidade: string;
  dataNascimento: Date;
  foto?: string;
  ativo: boolean;
  estadoCivil: string;
  escolaridade: string;
  enderecos?: Endereco[];
  conjugue?: PessoaConjugue;
  situacaoReligiosa: SituacaoReligiosa;
  carismas?: {
    primitivos?: CarismaPrimitivo[];
    servicos?: CarismaServico[];
    vinculados?: CarismaVinculado[];
  };
}
