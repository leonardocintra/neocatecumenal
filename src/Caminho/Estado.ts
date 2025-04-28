import Pais from "./Pais";

export default interface Estado {
  id: number;
  nome: string;
  sigla: string;
  pais: Pais;
}
