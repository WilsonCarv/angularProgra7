import { UserEntidad } from "./user-entidad";
export interface ActividadfisicaEntidad {
  id: number;
  nombre: string;
  tiempo_al_dia: string;
  veces_por_semana: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user: UserEntidad;
  expedientes_id: Array<number>;
}
