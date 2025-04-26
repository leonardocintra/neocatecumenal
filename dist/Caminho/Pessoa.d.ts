import Endereco from "./Endereco";
import Escolaridade from "../Configuracao/Escolaridade";
import EstadoCivil from "../Configuracao/EstadoCivil";
import PessoaConjugue from "./PessoaConjugue";
import SituacaoReligiosa from "../Configuracao/SituacaoReligiosa";
import CarismaVinculado from "../Configuracao/CarismaVinculado";
export default interface Pessoa {
    id: string;
    nome: string;
    conhecidoPor?: string;
    cpf: string;
    sexo: string;
    nacionalidade: string;
    dataNascimento: Date;
    foto?: string;
    ativo: boolean;
    estadoCivil: EstadoCivil;
    escolaridade: Escolaridade;
    enderecos?: Endereco[];
    conjugue?: PessoaConjugue;
    situacaoReligiosa: SituacaoReligiosa;
    carismas?: CarismaVinculado[];
}
