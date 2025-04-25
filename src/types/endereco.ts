import { Cidade } from "./cidade";

export interface Endereco {
  id: string;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: Cidade;
}
