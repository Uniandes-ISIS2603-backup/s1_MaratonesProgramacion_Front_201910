import { UsuarioDetailComponent } from './usuario/usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario/usuario-create/usuario-create.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { EquipoComponent } from './equipo/equipo.component';
import { AutenticacionComponent } from './autenticacion/autenticacion.component';






@NgModule({
   declarations: [
      AppComponent,
      AutenticacionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      UsuarioComponent,
      EquipoComponent,
      ToastrModule.forRoot(\ntimeOut
   ]
}),
       NgxPaginationModule,
       NgbModule,
   ],
   bootstrap: [AppComponent],
   providers: [
       {
           provide: HTTP_INTERCEPTORS,
           useClass: HttpErrorInterceptor,
           multi: true
       }
   ]
})
export class AppModule { }