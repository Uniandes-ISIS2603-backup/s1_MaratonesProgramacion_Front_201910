import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {BlogService} from '../blog.service';
import {Blog} from '../blog';
import {BlogDetail} from '../blog-deail';
@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnDestroy {

  constructor(private blogService: BlogService,
    private route: ActivatedRoute) { }


    
   blog_id: number;

   blogDetail:BlogDetail;
   bl_id: number;
   loader:any;

   getBlogDetail(): void {

    this.blogService.getBlogDetail(this.bl_id)
      .subscribe(o => {
        this.blogDetail = o
      });
  }

  onLoad(Params){
    this.bl_id = +this.route.snapshot.paramMap.get('id');
    this.blogDetail = new BlogDetail();
    this.getBlogDetail();
     }

     ngOnInit() {
      this.loader=this.route.params.subscribe((params:Params)=>this.onLoad(params));
      
     
   }

   ngOnDestroy() {
    this.loader.unsubscribe();
}

}
