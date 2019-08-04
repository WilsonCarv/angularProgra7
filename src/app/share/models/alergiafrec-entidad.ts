import { UserEntidad } from "./user-entidad";
export interface AlergiafrecEntidad {
  id: number;
  nombre: string;
  categoria: string;
  imagen: File;
  Active: boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user: UserEntidad;
}
