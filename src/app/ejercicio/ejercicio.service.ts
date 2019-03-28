import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ejercicio} from './ejercicio';


const API_URL = "http://localhost:8080/s1_maratones-api";
const ejercicios = '/ejercicios';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


  getEjercicios() : Observable<Ejercicio[]>
  {
    return this.http.get<Ejercicio[]>(API_URL + ejercicios);
  }


}
