import { LugarCompetenciaDetailComponent } from './lugarCompetencia-detail/lugarCompetencia-detail.component';
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
* @param lugarCompetencia The new author
* @returns The confirmation that the author was created
*/
createLugarCompetencia(lugarCompetencia): Observable<LugarCompetencia> {
    return this.http.post<LugarCompetencia>(API_URL + lugaresCompetencia, lugarCompetencia);
}
}
