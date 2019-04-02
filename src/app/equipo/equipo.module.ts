import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoListComponent } from './equipo-list/equipo-list.component';
import { EquipoService } from './equipo.service';
import { EquipoDetailComponent } from './equipo-detail/equipo-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EquipoListComponent,EquipoDetailComponent],
  providers: [EquipoService],
  exports: [EquipoListComponent,EquipoDetailComponent]
})
export class EquipoModule { }