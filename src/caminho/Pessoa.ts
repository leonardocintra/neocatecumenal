import Endereco from "./Endereco";
import Escolaridade from "./Escolaridade";
import EstadoCivil from "./EstadoCivil";

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
}
