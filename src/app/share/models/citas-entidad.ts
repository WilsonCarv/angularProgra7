import { UserEntidad } from "./user-entidad";
import { ExpedienteEntidad } from "./expediente-entidad";
import { Time } from '@angular/common';
export interface CitasEntidad {
  id: number;
  fecha: Date;
  hora_inicio: Time;
  hora_fin: Time;
  estado: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  user: UserEntidad;
  expediente: ExpedienteEntidad;
}
