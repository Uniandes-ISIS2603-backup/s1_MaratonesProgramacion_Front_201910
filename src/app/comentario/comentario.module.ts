import { ComentarioService } from './comentario.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentarioListComponent } from './comentario-list/comentario-list.component';
import { ComentarioCreateComponent } from './../comentario/comentario-create/comentario-create.component';

import { ComentarioDetailComponent } from './comentario-detail/comentario-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ComentarioListComponent, ComentarioDetailComponent, ComentarioCreateComponent],
  providers: [ComentarioService],
  exports: [ComentarioDetailComponent, ComentarioListComponent, ComentarioCreateComponent]
})
export class ComentarioModule { }
