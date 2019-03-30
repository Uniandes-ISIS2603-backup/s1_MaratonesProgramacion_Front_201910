import { LugarCompetencia } from './lugarCompetencia';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const lugaresCompetencia = 'lugarCompetencia.json';
@Injectable()
export class LugarCompetenciaService {

constructor(private http: HttpClient) { }

    getLugaresCompetencia() :Observable<LugarCompetencia[]>{
      return this.http.get<LugarCompetencia[]>(API_URL + lugaresCompetencia);
    }
}
