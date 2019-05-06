import { Component, OnInit } from '@angular/core';
import {Submission} from '../submission';
import {SubmissionService} from '../submission.service';

@Component({
  selector: 'app-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.css']
})
export class SubmissionListComponent implements OnInit {

  
  /** 
  * 
  */
 constructor(private submissionService: SubmissionService) { }

 /** 
 * la lista de submissions 
 */
 submissions: Submission[];

 /**
 * Asks the service to update the list of editorials
 */
   getSubmissions(): void {
     this.submissionService.getSubmissions().subscribe(submissions => this.submissions = submissions);
 }


 ngOnInit() {
     this.getSubmissions();
 }


}
