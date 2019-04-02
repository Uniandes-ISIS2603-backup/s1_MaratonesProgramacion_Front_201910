import { Usuario } from "../usuario/usuario";

export class Equipo {
    /**
     * Nombre del equipo
     */
    nombreEquipo: string;
    /**
     * Id del equipo
     */
    id: number;
    /**
     * Los participantes del equipo
     */
    participantes: Usuario[];
    /**
     * Couch del equipo
     */
    couch: Usuario;

}
