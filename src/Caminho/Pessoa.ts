import Endereco from "./Endereco";
import Escolaridade from "../Configuracao/Escolaridade";
import EstadoCivil from "../Configuracao/EstadoCivil";
import PessoaConjugue from "./PessoaConjugue";
import SituacaoReligiosa from "../Configuracao/SituacaoReligiosa";
import {
  CarismaPrimitivo,
  CarismaServico,
  CarismaVinculado,
} from "../Configuracao";

export default interface Pessoa {
  id: number;
  nome: string;
  conhecidoPor?: string;
  cpf: string;
  sexo: string;
  nacionalidade: string;
  dataNascimento: Date;
  foto?: string;
  ativo: boolean;
  estadoCivil: EstadoCivil;
  escolaridade?: Escolaridade;
  enderecos?: Endereco[];
  conjugue?: PessoaConjugue;
  situacaoReligiosa: SituacaoReligiosa;
  carismas?: {
    primitivos?: CarismaPrimitivo[];
    servicos?: CarismaServico[];
    vinculados?: CarismaVinculado[];
  };
}
