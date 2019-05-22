import { Component, OnInit } from '@angular/core';
import {EjercicioService} from '../ejercicio.service';
import {Ejercicio} from '../ejercicio';

@Component({
  selector: 'app-ejercicio-list',
  templateUrl: './ejercicio-list.component.html',
  styleUrls: ['./ejercicio-list.component.css']
})
export class EjercicioListComponent implements OnInit {

  /** 
  * 
  */
  constructor(private ejercicioService: EjercicioService) { }

  /** 
  * la lista de ejercicios 
  */
  ejercicios: Ejercicio[];

  /**
  * Asks the service to update the list of ejercicios
  */
    getEjercicios(): void {
      this.ejercicioService.getEjercicios().subscribe(ejercicios => this.ejercicios = ejercicios);
  }


  ngOnInit() {
      this.getEjercicios();
  }

}
