import { UserEntidad } from './user-entidad';

export interface UsuarioLogin {
  access_token: string;
  msg: string;
  user: UserEntidad;
  token_type: string;
  expires_in: number;
}

