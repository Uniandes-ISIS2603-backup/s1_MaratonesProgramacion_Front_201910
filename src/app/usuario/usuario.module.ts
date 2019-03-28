import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {UsuarioListComponent} from './usuario-list/usuario-list.component';
import {UsuarioCreateComponent} from './usuario-create/usuario-create.component';
import {UsuarioAddLenguajeComponent} from './usuario-add-lenguaje/usuario-add-lenguaje.component';
import {UsuarioEditComponent} from './usuario-edit/usuario-edit.component';
import {UsuarioAddSubmissionComponent} from './usuario-add-submission/usuario-add-submission.component';
import {UsuarioDetailComponent} from './usuario-detail/usuario-detail.component';

import {UsuarioService} from './usuario.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
    declarations: [
        UsuarioListComponent, UsuarioDetailComponent, UsuarioCreateComponent, UsuarioAddLenguajeComponent, UsuarioEditComponent
    ],
    providers: [UsuarioService],
    exports: [UsuarioListComponent, UsuarioEditComponent]
})
export class UsuarioModule {}
