import { UserEntidad } from "./user-entidad";
export interface EnfermedadEntidad {
  id: number;
  nombre: string;
  observaciones: string;
  imagen: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user: UserEntidad;
  expedientes_id: Array<number>;
}
