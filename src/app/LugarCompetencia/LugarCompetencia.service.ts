import { LugarCompetenciaDetail } from './LugarCompetencia-detail';
import { LugarCompetencia } from './lugarCompetencia';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const lugaresCompetencia = 'lugarCompetencias';
@Injectable()
export class LugarCompetenciaService {

constructor(private http: HttpClient) { }

    getLugaresCompetencia() :Observable<LugarCompetencia[]>{
      return this.http.get<LugarCompetencia[]>(API_URL + lugaresCompetencia);
    }

    getLugaresCompetenciaDetail(lugarId): Observable<LugarCompetenciaDetail> {
      return this.http.get<LugarCompetenciaDetail>(API_URL + lugaresCompetencia + '/' + lugarId);
    }

    postLugarCompetencia(lugarCompetencia: LugarCompetencia): Observable<LugarCompetencia>{
      return this.http.post<LugarCompetencia>(API_URL + lugaresCompetencia , lugarCompetencia);
    }
}
