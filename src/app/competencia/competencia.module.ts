import { CompetenciaListComponent } from './competenciaList/competenciaList.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciaComponent } from './competencia.component';
import { FormsModule } from '@angular/forms';
import { CompetenciaService } from './competencia.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CompetenciaListComponent],
  providers:[CompetenciaService],
  exports: [CompetenciaListComponent]

})

export class CompetenciaModule { }
