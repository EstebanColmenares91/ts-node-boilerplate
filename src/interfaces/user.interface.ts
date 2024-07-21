import { rol } from "../consts/roles";

export interface User {
    id_usuario: number,
    nombre: string,
    apellido: string,
    nombre_usuario: string,
    rol: rol
}