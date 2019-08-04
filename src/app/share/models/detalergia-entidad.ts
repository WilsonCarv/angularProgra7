import { AlergiafrecEntidad } from "./alergiafrec-entidad";
import { ExpedienteEntidad } from "./expediente-entidad";
export interface DetalergiaEntidad {
  id: number;
  reaccion: string;
  observaciones: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  alergiafrec: AlergiafrecEntidad;
  expediente: ExpedienteEntidad ;

}
