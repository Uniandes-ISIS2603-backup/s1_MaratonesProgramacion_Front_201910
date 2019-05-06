import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BLogListComponent } from './blog-list/blog-list.component';
import { BlogService } from './blog.service';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [BLogListComponent, BlogDetailComponent],
  exports:[BLogListComponent],
  providers: [BlogService]

})
export class BlogModule { }