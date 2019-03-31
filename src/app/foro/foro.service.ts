import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foro} from './foro';


const API_URL = "http://localhost:8080/s1_maratones-api/";
const foros = '/foros';

@Injectable({
  providedIn: 'root'
})
export class ForoService {

  /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
  constructor(private http: HttpClient) { }


  getSubmissions() : Observable<Submission[]>
  {
    return this.http.get<Submission[]>(API_URL + submissions);
  }


}