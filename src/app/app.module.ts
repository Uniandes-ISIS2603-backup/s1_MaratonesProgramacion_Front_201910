import { EquipoModule } from './equipo/equipo.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CompetenciaModule } from './competencia/competencia.module';
import { LugarCompetenciaModule } from './LugarCompetencia/LugarCompetencia.module';
import { LugarCompetenciaComponent } from './LugarCompetencia/LugarCompetencia.component';
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
import {LenguajeModule} from './lenguaje/lenguaje.module';
import {EjercicioModule} from './ejercicio/ejercicio.module';
import {SubmissionModule} from './submission/submission.module';
import {ForoModule} from './foro/foro.module';
import {ComentarioModule} from './comentario/comentario.module';
import {IndexModule} from './index/index.module';

import {InstitucionModule} from './institucion/institucion.module';
import {BlogModule} from './blog/blog.module';
@NgModule({
    declarations: [
        AppComponent

    ],
    imports: [
        BrowserModule,
        IndexModule,
        AppRoutingModule,
        HttpClientModule,
        UsuarioModule,
        EquipoModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        EjercicioModule,
        LenguajeModule,
        SubmissionModule,
        CompetenciaModule,
        LugarCompetenciaModule,
        ForoModule,
        ComentarioModule,
        InstitucionModule,
        BlogModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        LugarCompetenciaModule,
        CompetenciaModule,
        UsuarioModule
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

