import { Component, OnInit,OnDestroy, ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import {InstitucionService} from '../institucion.service';
import {Institucion} from '../institucion';
import {InstitucionDetail} from '../institucion-detail';

@Component({
  selector: 'app-institucion-detail',
  templateUrl: './institucion-detail.component.html',
  styleUrls: ['./institucion-detail.component.css']
})
export class InstitucionDetailComponent implements OnInit, OnDestroy {

  constructor(private institucionService: InstitucionService,
    private route: ActivatedRoute) { }

  institucionDetail:InstitucionDetail;

  
   institucion_id: number;

   navigationSubscription;

   showEdit: boolean;
getInstitucionDetail(): void {

    this.institucionService.getInstitucionesDetail(this.institucion_id)
      .subscribe(o => {
        this.institucionDetail = o
      });
  }
 ngOnInit() {
        this.institucion_id = +this.route.snapshot.paramMap.get('id');
        this.institucionDetail = new InstitucionDetail();
        this.getInstitucionDetail();
        this.showEdit = true;
    }

    /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}