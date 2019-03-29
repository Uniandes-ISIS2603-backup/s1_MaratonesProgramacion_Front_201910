import { LugarCompetenciaListComponent } from './LugarCompetenciaList/LugarCompetenciaList.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarCompetenciaComponent } from './LugarCompetencia.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LugarCompetenciaComponent,LugarCompetenciaListComponent],
  
  exports: [LugarCompetenciaComponent]
})
export class LugarCompetenciaModule { }
