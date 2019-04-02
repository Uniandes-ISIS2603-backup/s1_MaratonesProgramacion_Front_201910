import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Equipo} from './equipo';


const API_URL = "http://localhost:8080/s1_maratones-api";
const equipos = '/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


getEquipos() : Observable<Equipo[]>
  {
    return this.http.get<Equipo[]>(API_URL + equipos);
  }


}
