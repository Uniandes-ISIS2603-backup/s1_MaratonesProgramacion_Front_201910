import { Component, OnInit } from '@angular/core';
import {LenguajeService} from '../lenguaje.service';
import {Lenguaje} from '../lenguaje';

@Component({
  selector: 'app-lenguaje-list',
  templateUrl: './lenguaje-list.component.html',
  styleUrls: ['./lenguaje-list.component.css']
})
export class LenguajeListComponent implements OnInit {

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
     this.lenguajeService.getLenguajes().subscribe(lenguajes => this.lenguajes = lenguajes);
 }


 ngOnInit() {
     this.getLenguajes();
 }



}
