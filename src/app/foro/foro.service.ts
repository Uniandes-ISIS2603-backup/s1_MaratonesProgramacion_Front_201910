import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foro} from './foro';
import {ForoDetail} from './foro-detail';


const API_URL = "http://localhost:8080/s1_maratones-api/api/";
const foros = 'foros';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }

/**
    * Creaa un foro
    * @param foro El foro que se creará
    * @returns confirmación de la creación
    */
    createForo(foro): Observable<Foro> {
        return this.http.post<Foro>(API_URL + foros, foro);
    }

  getForos() : Observable<Foro[]>
  {
    return this.http.get<Foro[]>(API_URL + foros);
  }

    getForosDetail(foroId): Observable<ForoDetail> {
        return this.http.get<ForoDetail>(API_URL + foros + '/' + foroId);
    }


}