import Pessoa from "./Pessoa";

export default interface EstadoCivil {
  id: number;
  marido: Pessoa;
  esposa: Pessoa;
}
