
/*
*Esta clase repesenta un foro. Contiene toda la información relevante de un foro.
*/

export class Foro
{
    /** 
    * el id del foro
    */
    id: number;

    /** 
     * Votos a favor del foro
    */
    votosAFavor: number;

    /**
     * El nombre del foro
     */
    nombre: string;

    /** 
     * Votos en contra del foro
    */
    votosEnContra: number;

    /** 
     * La fecha de creación
    */
    fecha: string;

    /** 
     * tags del foro
    */
    tags: string;

    /** 
     * descripción del foro
    */
    descripcion: string;
}