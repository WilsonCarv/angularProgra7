import { UserEntidad } from "./user-entidad";
export interface EnfermedadfamiliarEntidad {
  id: number;
  nombre: string;
  observaciones: string;
  quien_padece: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user: UserEntidad;
  expedientes_id: Array<number>;
}
