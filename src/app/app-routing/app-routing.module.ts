
import { LenguajeListComponent } from './../lenguaje/lenguaje-list/lenguaje-list.component';
import { SubmissionListComponent } from './../submission/submission-list/submission-list.component';
import { EjercicioListComponent } from './../ejercicio/ejercicio-list/ejercicio-list.component';
import { CompetenciaListComponent } from './../competencia/competenciaList/competenciaList.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {UsuarioDetailComponent} from '../usuario/usuario-detail/usuario-detail.component';
import {UsuarioListComponent} from '../usuario/usuario-list/usuario-list.component';


import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { LugarCompetenciaListComponent } from '../LugarCompetencia/LugarCompetenciaList/LugarCompetenciaList.component';

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
                path: ':usuarios',
                children: [
                    {
                        path: 'list',
                        component: UsuarioListComponent
                    },
                    {
                        path: ':id',
                        component: UsuarioDetailComponent,
                        runGuardsAndResolvers: 'always'
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
        path: 'lenguajes',
        component: LenguajeListComponent

    },
    {
        path: 'competencias',
        component: CompetenciaListComponent
    },
    {
        path: 'lugaresCompetencia',
        component: LugarCompetenciaListComponent

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
