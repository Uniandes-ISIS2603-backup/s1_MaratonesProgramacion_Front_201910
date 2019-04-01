import { Competencia } from './Competencia';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const competencias = 'competencias.json';
@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

constructor(private http: HttpClient) { }

getCompetencias() :Observable<Competencia[]>{
  return this.http.get<Competencia[]>(API_URL + competencias);
}
}
