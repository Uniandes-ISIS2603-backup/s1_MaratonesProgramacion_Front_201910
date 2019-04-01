import { SubmissionService } from './submission.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { SubmissionDetailComponent } from './submission-detail/submission-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [SubmissionListComponent, SubmissionDetailComponent],
  providers: [SubmissionService],
  exports: [SubmissionDetailComponent, SubmissionListComponent]
})
export class SubmissionModule { }
