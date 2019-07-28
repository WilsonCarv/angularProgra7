export interface RolEntidad {
  msg: string;
  roles: {
    id: number;
    nombre: string;
    descripcion: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }[];
}
