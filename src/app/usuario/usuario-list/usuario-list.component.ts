import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Usuario} from '../../usuario/usuario';
import {UsuarioService} from '../../usuario/usuario.service';
@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

    /**
    * The list of usuarios to display
    */
    @Input() usuarios: Usuario[];

    /**
    * The component's constructor
    */
    constructor(private usuarioService: UsuarioService, private route: ActivatedRoute) {}

    allusuarios: string = 'no';
    /**
    * This method retrieves all the usuarios in the Bookstore to show them in the list
    */
    getUsuarios(): void {
        this.usuarioService.getUsuarios()
            .subscribe(usuarios => {
                this.usuarios = usuarios;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allusuarios)
            .subscribe(params => {
                console.log(params);

                this.allusuarios = params.allusuarios;
                console.log(this.allusuarios);
            });
        if (this.allusuarios == 'yes') {
            console.log("allusuarios");

            this.getUsuarios();
        }
    }

}
