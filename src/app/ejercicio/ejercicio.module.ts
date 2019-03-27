import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioDetailComponent } from './ejercicio-detail/ejercicio-detail.component';
import { EjercicioListComponent } from './ejercicio-list/ejercicio-list.component';
import { EjercicioService } from './ejercicio.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EjercicioDetailComponent, EjercicioListComponent],
  providers: [EjercicioService],
  exports: [EjercicioDetailComponent, EjercicioListComponent]
})
export class EjercicioModule { }
