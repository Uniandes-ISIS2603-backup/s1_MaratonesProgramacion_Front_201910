import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SubmissionService } from '../submission.service';
import { SubmissionDetail } from '../submission-detail';

@Component({
  selector: 'app-submission-detail',
  templateUrl: './submission-detail.component.html',
  styleUrls: ['./submission-detail.component.css']
})
export class SubmissionDetailComponent implements OnInit {

  constructor(
    private submissionService: SubmissionService,
    private route: ActivatedRoute) { }

  submission_id: number;

  submissionDetail: SubmissionDetail;

  ngOnInit() {
    this.submission_id = +this.route.snapshot.paramMap.get('id');
    this.submissionDetail = new SubmissionDetail();
    this.getSubmissionDetail();
  }


      /**
    * The method which retrieves the submissions
    */
   getSubmissionDetail(): void {
    this.submissionService.getSubmissionDetail(this.submission_id)
        .subscribe(submissionDetail => {
            this.submissionDetail = submissionDetail
        });
}
}
