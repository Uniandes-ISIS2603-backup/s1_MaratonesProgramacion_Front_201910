import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitucionListComponent } from './institucion-list/institucion-list.component';
import { InstitucionService } from './institucion.service';
import { InstitucionDetailComponent } from './institucion-detail/institucion-detail.component';


import { AppRoutingModule } from '../app-routing/app-routing.module';
import {FormsModule} from '@angular/forms';
import { InstitucionCreateComponent } from './institucion-create/institucion-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,FormsModule
  ],
  declarations: [InstitucionListComponent, InstitucionDetailComponent, InstitucionCreateComponent,],

  exports: [InstitucionListComponent],

  providers: [InstitucionService]
})
export class InstitucionModule { }