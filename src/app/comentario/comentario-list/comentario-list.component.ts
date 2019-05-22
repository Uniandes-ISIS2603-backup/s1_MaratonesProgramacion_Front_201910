import { Component, OnInit } from '@angular/core';
import {Comentario} from '../comentario';
import {ComentarioService} from '../comentario.service';

@Component({
  selector: 'app-foro-list',
  templateUrl: './comentario-list.component.html',
  styleUrls: ['./comentario-list.component.css']
})
export class ComentarioListComponent implements OnInit {

  
  /** 
  * 
  */
 constructor(private comentarioService: ComentarioService) { }

 /** 
 * la lista de Comentario
 */
 comentarios: Comentario[];

 /**
 * Le pide al servicio actualizar la lista de Comentarios
 */
   getComentarios(): void {
     this.comentarioService.getComentarios().subscribe(comentarios => this.comentarios = comentarios);
 }


 ngOnInit() {
     this.getComentarios();
 }
}
