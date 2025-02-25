import { Pais } from './pais';

export interface Estado {
  id: string;
  nome: string;
  sigla: string;
  pais: Pais;
}