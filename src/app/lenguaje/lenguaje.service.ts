import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Lenguaje} from './lenguaje';


const API_URL = "../../assets/";
const lenguajes = 'lenguajes.json';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


  getEditorials() : Observable<Lenguaje[]>
  {
    return this.http.get<Lenguaje[]>(API_URL + lenguajes);
  }


}
