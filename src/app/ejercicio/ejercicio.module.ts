import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioDetailComponent } from './ejercicio-detail/ejercicio-detail.component';
import { EjercicioListComponent } from './ejercicio-list/ejercicio-list.component';
import { EjercicioService } from './ejercicio.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EjercicioCreateComponent } from './ejercicio-create/ejercicio-create.component';
import { EjercicioEditComponent } from './ejercicio-edit/ejercicio-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [EjercicioDetailComponent, EjercicioListComponent, EjercicioCreateComponent, EjercicioEditComponent],
  providers: [EjercicioService],
  exports: [EjercicioDetailComponent, EjercicioListComponent, EjercicioCreateComponent]
})
export class EjercicioModule { }
