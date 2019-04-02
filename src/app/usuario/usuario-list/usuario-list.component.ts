import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {


  constructor(private usuarioService: UsuarioService) { }

  usuarios: Usuario[];

    getClientes(): void {
      this.usuarioService.getUsuarios().subscribe(clientes => this.usuarios = clientes);
  }


  ngOnInit() {
      this.getClientes();
  }

}
