import { CompetenciaDetail } from './competencia-detail';
import { Competencia } from './Competencia';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:8080/s1_maratones-api/api/";
const competencias = 'competencias';
@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {

constructor(private http: HttpClient) { }

getCompetencias() :Observable<Competencia[]>{
  return this.http.get<Competencia[]>(API_URL + competencias);
}

getCompetenciasDetail(competenciaId): Observable<CompetenciaDetail> {
  return this.http.get<CompetenciaDetail>(API_URL + competencias + '/' + competenciaId);
}

postCompetencia(competencia: Competencia): Observable<Competencia>{
  return this.http.post<Competencia>(API_URL + competencias , competencia);
}
}
