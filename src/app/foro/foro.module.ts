import { ForoService } from './foro.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoListComponent } from './foro-list/foro-list.component';
import { ForoDetailComponent } from './foro-detail/foro-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ForoListComponent, ForoDetailComponent],
  providers: [ForoService],
  exports: [ForoDetailComponent, ForoListComponent]
})
export class ForoModule { }
