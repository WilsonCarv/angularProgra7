import { UserEntidad } from "./user-entidad";
export interface ActividadesFisicasEntidad {
  nombre: string;
  imagen: File;
  user_id: number;
  user: UserEntidad;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
