import { SubmissionService } from './submission.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionListComponent } from './submission-list/submission-list.component';
import { SubmissionDetailComponent } from './submission-detail/submission-detail.component';
import { RouterModule } from '@angular/router';
import { SubmissionCreateComponent } from './submission-create/submission-create.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [SubmissionListComponent, SubmissionDetailComponent, SubmissionCreateComponent],
  providers: [SubmissionService],
  exports: [SubmissionDetailComponent, SubmissionListComponent, SubmissionCreateComponent]
})
export class SubmissionModule { }
