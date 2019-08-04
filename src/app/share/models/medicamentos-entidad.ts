import { UserEntidad } from "./user-entidad";
export interface MedicamentosEntidad {
  id: number;
  nombre: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user: UserEntidad;
}
