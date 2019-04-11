import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoListComponent } from './equipo-list/equipo-list.component';
import { EquipoCreateComponent } from './equipo-create/equipo-create.component';
import { EquipoDetailComponent } from './equipo-detail/equipo-detail.component';
import { EquipoService } from './equipo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EquipoListComponent, EquipoCreateComponent, EquipoDetailComponent],
  providers: [EquipoService]
})
export class EquipoModule { }