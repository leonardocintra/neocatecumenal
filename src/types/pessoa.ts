import { Endereco } from "./endereco";
import { Escolaridade } from "./escolaridade";
import { EstadoCivil } from "./estadoCivil";
export interface Pessoa {
  id: string;
  nome: string;
  conhecidoPor: string;
  cpf: string;
  sexo: string;
  nacionalidade: string;
  dataNascimento: Date;
  foto: string;
  ativo: boolean;
  estadoCivil: EstadoCivil;
  escolaridade: Escolaridade;
  enderecos: Endereco[];
}
