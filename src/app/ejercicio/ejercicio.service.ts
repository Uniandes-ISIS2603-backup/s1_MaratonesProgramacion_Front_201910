import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ejercicio} from './ejercicio';


const API_URL = "../../assets/";
const ejercicios = 'ejercicios.json';

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
