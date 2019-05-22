import { Comentario } from './../comentario/comentario';
import { Foro } from "./foro";
import {Usuario} from './../usuario/usuario';

export class ForoDetail extends Foro{


    comentarios: Comentario[];
    usuario: Usuario;
}
