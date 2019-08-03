import { UserEntidad } from "./user-entidad";
export interface AlergiafrecEntidad {
  id: number;
  nombre: string;
  categoria: string;
  imagen: File;
  user: UserEntidad;
}
