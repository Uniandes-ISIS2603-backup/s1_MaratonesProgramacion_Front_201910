import { Comentario } from './../comentario/comentario';
import { Foro } from "./foro";

export class ForoDetail extends Foro{


    comentarios: Comentario[];
    usuario: Usuario;
}
