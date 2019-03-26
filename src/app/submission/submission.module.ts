import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { SubmissionDetailComponent } from './submission-detail/submission-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmissionListComponent, SubmissionDetailComponent]
})
export class SubmissionModule { }
