import { LenguajeCreateComponent } from './lenguaje-create/lenguaje-create.component';
import { LenguajeService } from './lenguaje.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenguajeListComponent } from './lenguaje-list/lenguaje-list.component';
import { LenguajeDetailComponent } from './lenguaje-detail/lenguaje-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [LenguajeListComponent, LenguajeDetailComponent, LenguajeCreateComponent],
  providers: [LenguajeService],
  exports: [LenguajeListComponent, LenguajeDetailComponent, LenguajeCreateComponent]
  
})
export class LenguajeModule { }
