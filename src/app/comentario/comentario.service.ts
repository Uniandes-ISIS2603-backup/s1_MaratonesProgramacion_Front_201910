import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Comentario} from './comentario';


const API_URL = "http://localhost:8080/s1_maratones-api/";
const comentarios = '/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

/**
    * Creaa un comentario
    * @param comentario El comentario que se creará
    * @returns confirmación de la creación
    */
    createComentario(comentario): Observable<Comentario> {
        return this.http.post<Comentario>(API_URL + comentarios, comentario);
    }

  getComentarios() : Observable<Comentario[]>
  {
    return this.http.get<Comentario[]>(API_URL + comentarios);
  }


}