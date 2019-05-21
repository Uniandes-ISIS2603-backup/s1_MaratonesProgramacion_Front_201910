import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from './usuario.service';
import { UsuarioDetailComponent} from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { LenguajeModule } from '../lenguaje/lenguaje.module';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    LenguajeModule
  ],
  declarations: [UsuarioListComponent,UsuarioDetailComponent,UsuarioCreateComponent],
  providers: [UsuarioService],
  exports: [UsuarioListComponent,UsuarioDetailComponent]
})
export class UsuarioModule { }
