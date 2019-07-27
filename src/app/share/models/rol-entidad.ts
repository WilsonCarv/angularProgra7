export interface RolEntidad {
  msg: string;
  roles: {
    id: number;
    name: string;
    descripcion: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
  }[];
}
