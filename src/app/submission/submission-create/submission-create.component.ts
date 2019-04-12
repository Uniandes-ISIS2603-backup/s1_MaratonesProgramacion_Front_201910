import {Component, OnInit} from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SubmissionService } from '../submission.service';
import {Submission} from '../submission';

@Component({
  selector: 'app-submission-create',
  templateUrl: './submission-create.component.html',
  styleUrls: ['./submission-create.component.css']
})
export class SubmissionCreateComponent implements OnInit {

  constructor( private submissionService: SubmissionService,
    private toastrService: ToastrService) { }
    
  submission: Submission;


  @Output() create = new EventEmitter();

  @Output() cancel = new EventEmitter();


  cancelCreation(): void
  {
    this.cancel.emit();
  }

  crearSubmission(): Submission
  {
    this.submissionService.postSubmission(this.submission).subscribe((submission) => {
      this.submission = submission;
      this.create.emit();
      this.toastrService.success("la submission fue creada", "Agregar submission");
    })
    return this.submission;
  }

  
  ngOnInit(){
    this.submission = new Submission();
  }



}
