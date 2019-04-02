import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Submission} from './submission';


const API_URL = "http://localhost:8080/s1_maratones-api/";
const submissions = '/submissions';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

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