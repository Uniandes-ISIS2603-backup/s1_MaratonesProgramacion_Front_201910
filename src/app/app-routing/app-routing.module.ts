import { LenguajeListComponent } from './../lenguaje/lenguaje-list/lenguaje-list.component';
import { SubmissionListComponent } from './../submission/submission-list/submission-list.component';
import { EjercicioListComponent } from './../ejercicio/ejercicio-list/ejercicio-list.component';
import { ForoListComponent } from './../foro/foro-list/foro-list.component';
import { ComentarioListComponent } from './../comentario/comentario-list/comentario-list.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';
import {UsuarioDetailComponent} from '../usuario/usuario-detail/usuario-detail.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'Usuarios',
                children: [
                  {
                    path: 'list',
                    component: UsuarioListComponent
                  },
                  {
                    path: ':id',
                    component: UsuarioDetailComponent
                  }
                ]
              }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },/*
    {
        path: '**',
        redirectTo: 'home',
    }*/
    {
        path: 'ejercicios',
        component: EjercicioListComponent
    },
    {
        path: 'submissions',
        component: SubmissionListComponent
    },
    {
        path: 'foros',
        component: ForoListComponent
    },
    {
        path: 'comentarios',
        component: ComentarioListComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
