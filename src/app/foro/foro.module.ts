import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//import {BrowserModule} from '@angular/platform-browser';
//import {AppRoutingModule} from '../app-routing/app-routing.module';
//import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {NgxPermissionsModule} from 'ngx-permissions';

import { ForoService } from './foro.service';
import { ForoListComponent } from './foro-list/foro-list.component';
import { ForoDetailComponent } from './foro-detail/foro-detail.component';
import { ForoCreateComponent } from './foro-create/foro-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        RouterModule
  ],
  declarations: [ForoListComponent, ForoDetailComponent, ForoCreateComponent],
  providers: [ForoService],
  exports: [ForoDetailComponent, ForoListComponent, ForoCreateComponent]
})
export class ForoModule { }
