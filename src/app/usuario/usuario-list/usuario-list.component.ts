import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {


  constructor(private usuarioService: UsuarioService) { }

  usuarios: Usuario[];

    getUsuarios(): void {
      this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios);
  }


  ngOnInit() {
      this.getUsuarios();
  }

}
