import Estado from "./Estado";

export default interface Cidade {
  id: number;
  nome: string;
  estado: Estado;
}
