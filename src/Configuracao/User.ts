export default interface User {
  id: string;
  email: string;
  role: string;
  whatsapp: string;
  pessoaId?: number;
  verifiedWhatsapp: boolean;
  active: boolean;
}
