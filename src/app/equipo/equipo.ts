import { Usuario } from "../usuario/usuario";

export class Equipo {
  /**
     * El nombre del equipo
  */
  nombreEquipo:string;
  /**
     * El id del equipo
  */
  id:number;
  /**
     * El coach del equipo
  */
  coach:Usuario;
  /**
     * los participantes del equipo
  */
  participantes:Usuario[];
}