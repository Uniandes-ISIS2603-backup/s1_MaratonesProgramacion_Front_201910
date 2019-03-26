import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioComponent } from './ejercicio.component';
import { EjercicioGETComponent } from './ejercicio-get/ejercicio-get.component';
import { EjercicioListComponent } from './ejercicio-list/ejercicio-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EjercicioComponent, EjercicioGETComponent, EjercicioListComponent]
})
export class EjercicioModule { }
