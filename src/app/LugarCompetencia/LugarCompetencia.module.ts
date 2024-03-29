import { LugarCompetenciaDetailComponent } from './lugarCompetencia-Detail/lugarCompetencia-Detail.component';
import { LugarCompetenciaService } from './LugarCompetencia.service';
import { LugarCompetenciaListComponent } from './LugarCompetenciaList/LugarCompetenciaList.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugarCompetenciaComponent } from './LugarCompetencia.component';
import { FormsModule } from '@angular/forms';
import { LugarCompetenciaCreateComponent } from './lugarCompetencia-create/lugarCompetencia-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [LugarCompetenciaListComponent,LugarCompetenciaComponent, LugarCompetenciaDetailComponent, LugarCompetenciaCreateComponent],
  providers: [LugarCompetenciaService],
  exports: [LugarCompetenciaListComponent,LugarCompetenciaComponent,LugarCompetenciaDetailComponent, LugarCompetenciaCreateComponent]
})
export class LugarCompetenciaModule { }
