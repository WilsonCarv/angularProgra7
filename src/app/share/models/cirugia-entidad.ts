import { UserEntidad } from "./user-entidad";
export interface CirugiaEntidad {
  id: number;
  nombre: string;
  cuando: string;
  donde: string;
  descripcion: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user: UserEntidad;
}
