import { IndexComponent } from './../index/index.component';
import { CompetenciaComponent } from './../competencia/competencia.component';
import { CompetenciaDetailComponent } from './../competencia/competencia-detail/competencia-detail.component';
import { EquipoDetailComponent } from './../equipo/equipo-detail/equipo-detail.component';
import { EquipoListComponent } from './../equipo/equipo-list/equipo-list.component';
import { UsuarioCreateComponent } from './../usuario/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './../usuario/usuario-list/usuario-list.component';
import { LugarCompetenciaListComponent } from './../LugarCompetencia/LugarCompetenciaList/LugarCompetenciaList.component';
import { LenguajeDetailComponent } from './../lenguaje/lenguaje-detail/lenguaje-detail.component';
import { SubmissionDetailComponent } from './../submission/submission-detail/submission-detail.component';
import { EjercicioDetailComponent } from './../ejercicio/ejercicio-detail/ejercicio-detail.component';
import { LenguajeListComponent } from './../lenguaje/lenguaje-list/lenguaje-list.component';
import { SubmissionListComponent } from './../submission/submission-list/submission-list.component';
import { EjercicioListComponent } from './../ejercicio/ejercicio-list/ejercicio-list.component';
import { ForoListComponent } from './../foro/foro-list/foro-list.component';
import { ForoDetailComponent } from './../foro/foro-detail/foro-detail.component';
import { ForoCreateComponent } from './../foro/foro-create/foro-create.component';
import { ComentarioListComponent } from './../comentario/comentario-list/comentario-list.component';
import { ComentarioDetailComponent } from './../comentario/comentario-detail/comentario-detail.component';
import { ComentarioCreateComponent } from './../comentario/comentario-create/comentario-create.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import { EjercicioCreateComponent } from './../ejercicio/ejercicio-create/ejercicio-create.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { CompetenciaListComponent } from '../competencia/competenciaList/competenciaList.component';
import { UsuarioDetailComponent } from '../usuario/usuario-detail/usuario-detail.component';
import { SubmissionCreateComponent } from '../submission/submission-create/submission-create.component';

import { BLogListComponent } from './../blog/blog-list/blog-list.component';
import { BlogDetailComponent } from './../blog/blog-detail/blog-detail.component';
import { InstitucionListComponent } from './../institucion/institucion-list/institucion-list.component';
import { InstitucionDetailComponent } from './../institucion/institucion-detail/institucion-detail.component';
import { InstitucionCreateComponent } from './../institucion/institucion-create/institucion-create.component';
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
    },{
        path: 'index',
        component: IndexComponent
    },
    {
        path: 'ejercicios',
        children:[{
            path: 'list',
            component: EjercicioListComponent
        },
        {
           path: 'add',
           component: EjercicioCreateComponent     
        },
        {
            path: ':id',
            component: EjercicioDetailComponent
        }
        ]
    },
    
    {
        path: 'submissions',
        children:[{
            path: 'list',
            component: SubmissionListComponent
        },
        {
            path: 'add',
            component: SubmissionCreateComponent
        },
        {
            path: ':id',
            component: SubmissionDetailComponent
        }
        ]
    },
    {

        path: 'lenguajes',
        children:[{
            path: 'list',
            component: LenguajeListComponent
        },
        {
            path: ':id',
            component: LenguajeDetailComponent
        }
        ]
    },
    {

        path: 'usuarios',
        children:[{
            path: 'list',
            component: UsuarioListComponent
        },
        {
            path: ':id',
            component: UsuarioDetailComponent
        },
        {
            path: ':create',
            component: UsuarioCreateComponent
        }
        ]
    },
    {

        path: 'equipos',
        children:[{
            path: 'list',
            component: EquipoListComponent
        },
        {
            path: ':id',
            component: EquipoDetailComponent
        }
        
        ]
    },
    {
        path: 'competencias',
        children: [{
            path: 'list',
            component: CompetenciaListComponent 
        },
    {
        path: ':id',
        component: CompetenciaDetailComponent,
        children: [
            {
                path: 'ejercicios',
                children:[{
                    path: 'list',
                    component: EjercicioListComponent
                },
                {
                    path: ':id',
                    component: EjercicioDetailComponent
                }
                ]
            },
            {

                path: 'equipos',
                children:[{
                    path: 'list',
                    component: EquipoListComponent
                },
                {
                    path: ':id',
                    component: EquipoDetailComponent
                }
                
                ]
            },  
            {
                path: 'lugares',
                children: [{
                    path: 'list',
                    component: LugarCompetenciaListComponent
                }]
        
            }
        ]   
    }],
    },
    {
        path: 'lugares',
        children: [{
            path: 'list',
            component: LugarCompetenciaListComponent
        }]

    },
    {
        path: 'foros',
        children:[{
            path: 'list',
            component: ForoListComponent
        },
        {
            path: 'add',
            component: ForoCreateComponent
        },
        {
            path: ':id',
            component: ForoDetailComponent
        }

        ]
    },
    {
        path: 'comentarios',
        component: ComentarioListComponent,
        children:[{
            path: 'list',
            component: ComentarioListComponent
        },
        {
            path: 'add',
            component: ComentarioCreateComponent
        },
        {
            path: ':id',
            component: ComentarioDetailComponent
        }
        ]
    },
    {
        path: 'blogs',
        children: [{
          path: 'list',
          component: BLogListComponent
        },
        {
          path: ':id',
          component: BlogDetailComponent,
          outlet: 'detail'
        }
        ]
    
      },
    { path: 'instituciones',
    children: [{
      path: 'list',
      component: InstitucionListComponent
    },
    {
      path: ':id',
      component: InstitucionDetailComponent,
      outlet: 'detail'
    },
     {
      path: ':create',
      component: InstitucionCreateComponent,
      
    }
    ]
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
