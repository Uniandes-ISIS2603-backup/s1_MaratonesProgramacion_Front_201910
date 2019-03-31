import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Lenguaje} from './lenguaje';
import { LenguajeDetail } from './lenguaje-detail';


const API_URL = "http://localhost:8080/s1_maratones-api/";
const lenguajes = '/lenguajes';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


  getLenguajes() : Observable<Lenguaje[]>
  {
    return this.http.get<Lenguaje[]>(API_URL + lenguajes);
  }

  getLenguajesDetail(lenguajeId): Observable<LenguajeDetail> {
    return this.http.get<LenguajeDetail>(API_URL + lenguajes + '/' + lenguajeId);
}


}
