import { Component, OnInit } from '@angular/core';
import {Foro} from '../foron';
import {ForoService} from '../foro.service';

@Component({
  selector: 'app-foro-list',
  templateUrl: './foro-list.component.html',
  styleUrls: ['./foro-list.component.css']
})
export class ForoListComponent implements OnInit {

  
  /** 
  * 
  */
 constructor(private foroService: ForoService) { }

 /** 
 * la lista de foros
 */
 foros: Foro[];

 /**
 * Le pide al servicio actualizar la lista de foros.
 */
   getForos(): void {
     this.foroService.getForos().subscribe(foros => this.foros = foros);
 }


 ngOnInit() {
     this.getForos();
 }


}
