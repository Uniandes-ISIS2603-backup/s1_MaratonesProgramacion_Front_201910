import { Component, OnInit } from '@angular/core';
import {Institucion} from '../institucion';
import {InstitucionService} from '../institucion.service';

@Component({
  selector: 'app-institucion-list',
  templateUrl: './institucion-list.component.html',
})
export class InstitucionListComponent implements OnInit {

 constructor(private institucionService: InstitucionService)
 {

 }

 institucion:Institucion[];

 getInstitucion(): void{
   this.institucionService.getInstituciones().subscribe(lasInstituciones => {this.institucion=lasInstituciones});

 }
 ngOnInit(){
   this.getInstitucion();
 }
}