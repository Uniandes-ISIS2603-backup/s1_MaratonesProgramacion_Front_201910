
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';
@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})

export class UsuarioCreateComponent implements OnInit {

  constructor(
    private UsuarioService: UsuarioService,
    private toastrService: ToastrService
  ) { }

  Usuario: Usuario;

  ngOnInit() {
    this.Usuario = new Usuario();
  }

  /**
   * 
   */
  @Output() create = new EventEmitter();

  /**
   * 
   */
  @Output() cancel = new EventEmitter();

  /**
   * 
   */
  createUsuario(): Usuario{
    this.UsuarioService.postUsuario(this.Usuario)
    this.create.emit();
    return this.Usuario;
  }
  /**
   * 
   */
  cancelCreation(): void{
      this.cancel.emit();
  }





}