import { CompetenciaCreateComponent } from './competencia-create/competencia-create.component';
import { CompetenciaListComponent } from './competenciaList/competenciaList.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetenciaComponent } from './competencia.component';
import { FormsModule } from '@angular/forms';
import { CompetenciaService } from './competencia.service';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CompetenciaDetailComponent} from './competencia-detail/competencia-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [CompetenciaListComponent, CompetenciaComponent, CompetenciaDetailComponent, CompetenciaCreateComponent],
  providers:[CompetenciaService],
  exports: [CompetenciaListComponent,CompetenciaComponent, CompetenciaDetailComponent, CompetenciaCreateComponent]

})

export class CompetenciaModule { }
