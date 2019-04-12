import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog'
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BLogListComponent implements OnInit {

  constructor(private blogService: BlogService)
 {

 }

 blog:Blog[];

 getBlog(): void{
   this.blogService.getBlog().subscribe(lasInstituciones => {this.blog=lasInstituciones});

 }
 ngOnInit(){
   this.getBlog();
 }

}