import Cidade from "./Cidade";

export default interface Endereco {
  id: number;
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: Cidade;
  observacao: string;
}
