import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenguajeListComponent } from './lenguaje-list/lenguaje-list.component';
import { LenguajeDetailComponent } from './lenguaje-detail/lenguaje-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LenguajeListComponent, LenguajeDetailComponent]
})
export class LenguajeModule { }
