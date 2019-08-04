import { EnfermedadesFrecuentesEntidad } from "./enfermedades-frecuentes-entidad";
import { ExpedienteEntidad } from "./expediente-entidad";
export interface DetenfemedadesEntidad {
  id: number;
  observaciones: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  enfermedad: EnfermedadesFrecuentesEntidad;
  expediente: ExpedienteEntidad;

}
