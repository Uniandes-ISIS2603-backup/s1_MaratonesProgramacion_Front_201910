import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoListComponent } from './equipo-list/equipo-list.component';
import { EquipoService } from './equipo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EquipoListComponent],
  providers: [EquipoService],
  exports: [EquipoListComponent]
})
export class EquipoModule { }