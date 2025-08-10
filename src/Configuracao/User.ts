export default interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  whatsapp: string;
  cpf?: string;
  pessoaId?: number;
  verifiedWhatsapp: boolean;
  active: boolean;
}
