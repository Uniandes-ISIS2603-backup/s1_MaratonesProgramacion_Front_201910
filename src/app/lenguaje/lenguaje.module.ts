import { LenguajeCreateComponent } from './lenguaje-create/lenguaje-create.component';
import { LenguajeService } from './lenguaje.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenguajeListComponent } from './lenguaje-list/lenguaje-list.component';
import { LenguajeDetailComponent } from './lenguaje-detail/lenguaje-detail.component';
import { RouterModule } from '@angular/router';
import { LenguajeEditComponent } from './lenguaje-edit/lenguaje-edit.component';
import { LenguajeDeleteComponent } from './lenguaje-delete/lenguaje-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [LenguajeListComponent, LenguajeDetailComponent, LenguajeCreateComponent, LenguajeEditComponent, LenguajeDeleteComponent],
  providers: [LenguajeService],
  exports: [LenguajeListComponent, LenguajeDetailComponent, LenguajeCreateComponent]
  
})
export class LenguajeModule { }
