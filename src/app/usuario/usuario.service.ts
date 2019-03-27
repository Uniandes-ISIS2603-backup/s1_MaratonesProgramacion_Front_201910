import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Usuario} from './usuario';
import {UsuarioDetail} from './usuario-detail';
//import {Lenguaje} from './lenguaje';


import {environment} from '../../environments/environment';
const API_URL = environment.apiURL;
const usuarios = '/usuarios';
//const lenguajes = '/lenguajes';


/**
* The service provider for everything related to usuarios
*/
@Injectable()
export class UsuarioService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of usuarios retrieved from the API
    * @returns The list of usuarios in real time
    */
    getUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(API_URL + usuarios);
    }

    /**
    * Creates a new usuario
    * @param usuario The new usuario
    * @returns The usuario with its new id if it was created, false if it wasn't
    */
    createUsuario(usuario): Observable<UsuarioDetail> {
        return this.http.post<UsuarioDetail>(API_URL + usuarios, usuario);
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getUsuarioDetail(usuarioId): Observable<UsuarioDetail> {
        return this.http.get<UsuarioDetail>(API_URL + usuarios + '/' + usuarioId);
    }

    /**
    * Creates a lenguaje
    * @param lenguaje The lenguaje
    * @returns True if the lenguaje was posted, false otherwise
    */
    /*createLenguaje(usuarioId, lenguaje): Observable<Lenguaje> {
        return this.http.post<Lenguaje>(API_URL + usuarios + '/' + usuarioId + lenguajes, lenguaje);
    }
*/
    /**
        * Updates a new usuario
        * @param usuario The updated usuario
        * @returns The updated usuario
        */
    updateUsuario(usuario): Observable<UsuarioDetail> {
        return this.http.put<UsuarioDetail>(API_URL + usuarios + '/' + usuario.id, usuario);
    }
}
