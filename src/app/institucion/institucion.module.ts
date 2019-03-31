import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitucionListComponent } from './institucion-list/institucion-list.component';
import { InstitucionService } from './institucion.service';
import { InstitucionDetailComponent } from './institucion-detail/institucion-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [InstitucionListComponent, InstitucionDetailComponent],

  exports: [InstitucionListComponent],

  providers: [InstitucionService]
})
export class InstitucionModule { }