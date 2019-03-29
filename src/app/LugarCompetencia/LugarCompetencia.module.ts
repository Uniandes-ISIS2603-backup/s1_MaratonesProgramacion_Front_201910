import { LugarCompetenciaService } from './LugarCompetencia.service';
import { LugarCompetenciaListComponent } from './LugarCompetenciaList/LugarCompetenciaList.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarCompetenciaComponent } from './LugarCompetencia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LugarCompetenciaComponent,LugarCompetenciaListComponent],
  providers: [LugarCompetenciaService],
  exports: [LugarCompetenciaComponent]
})
export class LugarCompetenciaModule { }
