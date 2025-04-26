import Pais from "./Pais";

export default interface Estado {
  id: string;
  nome: string;
  sigla: string;
  pais: Pais;
}
