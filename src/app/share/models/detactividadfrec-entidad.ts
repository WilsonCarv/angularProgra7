import { ActividadesFisicasEntidad } from "./actividades-fisicas-entidad";
import { ExpedienteEntidad } from "./expediente-entidad";
export interface DetactividadfrecEntidad {
  id: number;
  tiempo_al_dia: string;
  veces_por_semana: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  actividad: ActividadesFisicasEntidad;
  expediente: ExpedienteEntidad;
}
