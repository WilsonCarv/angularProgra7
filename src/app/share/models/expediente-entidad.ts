import { ActividadesFisicasEntidad } from "./actividades-fisicas-entidad";
import { ActividadfisicaEntidad } from "./actividadfisica-entidad";
import { AlergiaEntidad } from "./alergia-entidad";
import { AlergiafrecEntidad } from "./alergiafrec-entidad";
import { CirugiaEntidad } from "./cirugia-entidad";
import { EnfermedadEntidad } from "./enfermedad-entidad";
import { EnfermedadfamiliarEntidad } from "./enfermedadfamiliar-entidad";
import { EnfermedadesFrecuentesEntidad } from "./enfermedades-frecuentes-entidad";
import { MedicamentosEntidad } from "./medicamentos-entidad";
import { DetactividadfrecEntidad } from "./detactividadfrec-entidad";
import { DetalergiaEntidad } from "./detalergia-entidad";
import { DetenfemedadesEntidad } from "./detenfemedades-entidad";
import { UserEntidad } from "./user-entidad";
import { Citas } from "./citas";
export interface ExpedienteEntidad {
  id: number;
  identificacion: string;
  nombre: string;
  primer_apellido: string;
  segundo_apellido: string;
  sexo: string;
  fecha_nacimiento: Date;
  tipo_sangre: string;
  lugar_Residencia: string;
  numero_telefono: string;
  contacto_emergencia: string;
  fumado: number;
  historial_fumado: string;
  cantidad_cigarros_dia: string;
  edad_comenzo_fumar: number;
  observaciones_fumado: string;
  alcohol: number;
  historial_alcohol: string;
  edad_comenzo_tomar: string;
  frecuencia_alcohol: string;
  toma_usualmente: string;
  observaciones_alcohol: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  actividadesFisicasFrecuentes: ActividadesFisicasEntidad[];
  actividades_fisicas_frecuentes_id: Array<number>;
  alergiasFrecuentes: AlergiafrecEntidad[];
  alergias_frecuentes_id: Array<number>;
  enfermedadesFrecuentes: EnfermedadesFrecuentesEntidad[];
  enfermedades_frecuentes_id: Array<number>;
  actividades_fisicas: ActividadfisicaEntidad[];
  actividades_fisicas_id: Array<number>;
  users_id: Array<number>;
  users: UserEntidad[];
  /* Doctores: ActividadfisicaEntidad[];
  alergias: AlergiaEntidad[];
  alergiasFrecuentes: AlergiafrecEntidad[];
  cirugias: CirugiaEntidad[];
  enfermedades: EnfermedadEntidad[];
  enfermedadesFamiliares: EnfermedadfamiliarEntidad[];
  enfermedadesFrecuentes: EnfermedadesFrecuentesEntidad[];
  medicamentos: MedicamentosEntidad[];
  users: UserEntidad[];
  detalleActividades: DetactividadfrecEntidad[];
  detalleAlergias: DetalergiaEntidad[];
  detalleEnfermedades: DetenfemedadesEntidad[];
  citas: Citas[];*/
}
