import { RowDataPacket } from "mysql2";
import { rol } from "../consts/roles";

export interface User  extends RowDataPacket {
    id_usuario: number,
    nombre: string,
    apellido: string,
    nombre_usuario: string,
    rol: rol
}