export interface UserEntidad {
  id: number;
  name: string;
  primer_apellido: string;
  segundo_apellido: string;
  email: string;
  password: string;
  sexo: string;
  remember_token: string;
  created_at: Date;
  updated_at: Date;
  role_id: number;
}
