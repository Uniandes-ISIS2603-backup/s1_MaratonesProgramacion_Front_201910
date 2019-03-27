import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Submission} from './submission';


const API_URL = "../../assets/";
const submissions = 'submissions.json';

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