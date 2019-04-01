import { LugarCompetenciaDetail } from './lugarCompetenciaDetail';

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

 

/**
* Crea un lugarCompetencia
* @param lugarCompetencia El nuevo lugarCompetencia
* @returns Confirmacion de que se creo el lugarCompetencia
*/
createLugarCompetencia(lugarCompetencia): Observable<LugarCompetencia> {
    return this.http.post<LugarCompetencia>(API_URL + lugaresCompetencia, lugarCompetencia);
}

getLugarCompetenciaDetail(lugarCompetenciaId): Observable<LugarCompetenciaDetail> {
  return this.http.get<LugarCompetenciaDetail>(API_URL + lugaresCompetencia + '/' + lugarCompetenciaId);
}


}
