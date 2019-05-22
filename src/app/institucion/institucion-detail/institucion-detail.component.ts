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

  
  
   institucion_id: number;

   institucionDetail:InstitucionDetail;
   ins_id: number;
   loader:any;
getInstitucionDetail(): void {

    this.institucionService.getInstitucionesDetail(this.ins_id)
      .subscribe(o => {
        this.institucionDetail = o
      });
  }

  onLoad(Params){
 this.ins_id = +this.route.snapshot.paramMap.get('id');
 this.institucionDetail = new InstitucionDetail();
 this.getInstitucionDetail();
  }
 ngOnInit() {
       this.loader=this.route.params.subscribe((params:Params)=>this.onLoad(params));
       
      
    }

    
    ngOnDestroy() {
        this.loader.unsubscribe();
    }
}