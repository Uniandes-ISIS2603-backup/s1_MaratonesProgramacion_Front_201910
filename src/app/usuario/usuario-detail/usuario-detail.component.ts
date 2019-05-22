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

  usuarioDetail: UsuarioDetail;


  getUsuarioDetail(): void
  {
    this.usuarioService.getUsuarioPorId(this.Usuario_id).subscribe(UsuDetail =>{ this.usuarioDetail = UsuDetail});
  }

  ngOnInit() {
    this.Usuario_id = +this.route.snapshot.paramMap.get('id');
    this.usuarioDetail = new UsuarioDetail();
    this.getUsuarioDetail();
  }

}
