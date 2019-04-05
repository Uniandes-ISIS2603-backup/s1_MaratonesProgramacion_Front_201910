import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from './usuario';


const API_URL = "http://localhost:8080/s1_maratones-api";
const usuarios = 'usuarios.json';
const usuario = 'usuario-';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


  getUsuarios() : Observable<Usuario[]>
  {
    return this.http.get<Usuario[]>(API_URL + usuarios);
  }



  getUsuarioPorId(usuarioId: number): Observable<Usuario>
  {
    return this.http.get<Usuario>(API_URL + usuario + usuarioId + '.json');
  }

  postUsuario(usuario: Usuario):void
  {
    console.log(usuario);
  }

}
