import { Usuario } from './usuario';
import { Submission } from '../submission/submission';
import { Lenguaje } from '../lenguaje/lenguaje';
import { Equipo } from '../equipo/equipo';

/**
* This class represents a book of the BookStore.
* It contains all the information relevant to the book.
*/
export class UsuarioDetail extends Usuario {

    lenguajes: Lenguaje[];

    submissions: Submission[];

    equipos: Equipo[];
}
