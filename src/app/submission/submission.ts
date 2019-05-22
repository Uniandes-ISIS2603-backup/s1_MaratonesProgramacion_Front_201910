import { Ejercicio } from './../ejercicio/ejercicio';

/*
*Esta clase contiene toda la infromacion pertinente para una submission
*/
/**
 *
 *
 * @export
 * @class Submission
 */
export class Submission
{

    /** 
    * el id de la submission
    */
    id: number;

    /** 
     * El tiempo que tardo la submission
    */
    tiempo: number;

    /**
     * El veredicto que se otorga a la entrega
     */
    veredicto: string;

    /** 
     * La ruta del archivo
    */
    archivo: string;

    /** 
     * La fecha de entrega
    */
    fecha: string;

    /** 
     * la memoria que gasto la submission
    */
    memoria: number;

    /** 
     * el codigo de la entrega
    */
    codigo: string;

    /**
     *
     *Ejercicio al que fue enviado
     * @type {Ejercicio}
     * @memberof Submission
     */
    ejercicio: Ejercicio;


}