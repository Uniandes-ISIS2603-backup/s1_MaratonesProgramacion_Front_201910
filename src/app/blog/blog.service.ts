import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Blog} from './blog'
import { BlogDetail } from './blog-deail';

const API_URL = "http://localhost:8080/s1_maratones-api/api/";
const blog = 'blogs/';
const publicaciones = '/publicaciones';
@Injectable()
export class BlogService {

 constructor(private http: HttpClient) { }

getBlog():Observable<Blog[]>
{
const blog = 'blogs';
  return this.http.get<Blog[]>(API_URL + blog);
}
getBlogDetail(blogID):Observable<BlogDetail>
{
  return this.http.get<BlogDetail>(API_URL +blog + blogID+publicaciones);
}
}