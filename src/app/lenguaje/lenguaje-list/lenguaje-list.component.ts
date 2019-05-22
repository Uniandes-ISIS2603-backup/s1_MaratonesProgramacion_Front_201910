import { Component, OnInit, Input } from '@angular/core';
import {LenguajeService} from '../lenguaje.service';
import {Lenguaje} from '../lenguaje';

@Component({
  selector: 'app-lenguaje-list',
  templateUrl: './lenguaje-list.component.html',
  styleUrls: ['./lenguaje-list.component.css']
})
export class LenguajeListComponent implements OnInit {

  @Input() idUsuario: number;

  /** 
  * 
  */
 constructor(private lenguajeService: LenguajeService) { }

 /** 
 * la lista de ejercicios 
 */
 lenguajes: Lenguaje[];

 /**
 * Asks the service to update the list of editorials
 */
   getLenguajes(): void {
     this.lenguajeService.getLenguajesUsuario(this.idUsuario).subscribe(lenguajes => this.lenguajes = lenguajes);
 }


 ngOnInit() {
     this.getLenguajes();
 }



}
