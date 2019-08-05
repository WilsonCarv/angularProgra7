import { UserEntidad } from "./user-entidad";
export interface AlergiaEntidad {
  id: number;
  nombre: string;
  categoria: string;
  reaccion: string;
  observaciones: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user: UserEntidad;
}
