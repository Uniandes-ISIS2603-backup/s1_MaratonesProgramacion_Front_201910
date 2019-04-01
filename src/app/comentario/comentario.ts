
/*
*Esta clase repesenta un foro. Contiene toda la información relevante de un Comentario
*/

export class Comentario
{
    /** 
    * el id del Comentario
    */
    id: number;

    /** 
     * Votos a favor del Comentario
    */
    votosAFavor: number;

    /**
     * El mensaje del Comentario
     */
    nombre: string;

    /** 
     * Votos en contra del Comentario
    */
    votosEnContra: number;

}