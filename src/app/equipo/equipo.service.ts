import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Equipo} from './equipo';

const API_URL = "http://localhost:8080/s1_maratones-api/api/";
const equipos = 'equipos/';
const equipo = 'equipo-';
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



  getEquipoPorId(equipoId: number): Observable<Equipo>
  {
    return this.http.get<Equipo>(API_URL + equipo + equipoId + '.json');
  }

  postEquipo(equipo: Equipo):void
  {
    console.log(equipo);
  }

/**
   * Creates a new equipo
   * @param equipo The new equipo
   * @returns The new client with the new id
   */
  createEquipo(equipo) : Observable<Equipo>
  {
    return this.http.post<Equipo>(API_URL + equipos, equipo);
  }
}
