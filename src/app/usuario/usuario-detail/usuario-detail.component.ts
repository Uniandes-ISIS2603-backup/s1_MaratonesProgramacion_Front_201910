import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute } from '@angular/router';

import {UsuarioDetail} from '../usuario-detail';

import { UsuarioService } from '../usuario.service';
@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {


  constructor(private usuarioService: UsuarioService,
  private route: ActivatedRoute) { }

  Usuario_id: number;

  usuario: Usuario;

  usuarioDetail: UsuarioDetail;

  getUsuarioDetail(): void
  {
    this.usuarioService.getUsuarioPorId(this.Usuario_id).subscribe(UsuarioDetail =>{ this.usuario = UsuarioDetail});
  }

  ngOnInit() {
    this.Usuario_id =+ this.route.snapshot.paramMap.get('id');
    this.usuario = new Usuario();
    this.getUsuarioDetail();
  }

}
