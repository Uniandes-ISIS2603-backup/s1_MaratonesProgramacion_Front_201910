import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Institucion} from './institucion';
import {InstitucionDetail} from './institucion-detail';

const API_URL = "http://localhost:8080/s1_maratones-api/";
const instituciones = 'instituciones';

@Injectable()
export class InstitucionService {

 constructor(private http: HttpClient) { }

getInstituciones():Observable<Institucion[]>
{
  return this.http.get<Institucion[]>(API_URL + instituciones);
}
getInstitucionesDetail(institucionID):Observable<InstitucionDetail>
{
  return this.http.get<InstitucionDetail>(API_URL + instituciones);
}
}