import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioDetailComponent } from './ejercicio-detail/ejercicio-detail.component';
import { EjercicioListComponent } from './ejercicio-list/ejercicio-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EjercicioDetailComponent, EjercicioListComponent]
})
export class EjercicioModule { }
