import Estado from "./Estado";

export default interface Cidade {
  id: string;
  nome: string;
  estado: Estado;
}
