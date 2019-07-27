export interface UserEntidad {
  id: number;
  name: string;
  primer_apellido: string;
  segundo_apellido: string;
  email: string;
  email_verified_at: Date;
  password: string;
  sexo: string;
  ubicacion_consultorio: string;
  precio_consulta: number;
  role_id: number;
  remember_token: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
