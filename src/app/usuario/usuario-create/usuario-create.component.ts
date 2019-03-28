import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {UsuarioService} from '../Usuario.service';
import {Usuario} from '../usuario';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {


    constructor(
        private usuarioService: UsuarioService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new usuario
    */
    usuario: Usuario;


    /**
    * Cancels the creation of the new usuario
    * Redirects to the usuarios' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The usuario wasn\'t created', 'Usuario creation');
        this.router.navigate(['/usuarios/list']);
    }

    /**
    * Creates a new usuario
    */
    createUsuario(): Usuario {
        this.usuarioService.createUsuario(this.usuario)
            .subscribe(usuario => {
                this.usuario.id = usuario.id;
                this.router.navigate(['/usuarios/' + usuario.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.usuario;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new Usuario();
    }

}
