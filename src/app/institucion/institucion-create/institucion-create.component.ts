import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import {Institucion} from '../institucion';
import {InstitucionService} from '../institucion.service';
@Component({
  selector: 'app-institucion-create',
  templateUrl: './institucion-create.component.html',
  styleUrls: ['./institucion-create.component.css']
})
export class InstitucionCreateComponent implements OnInit {

  constructor( private institucionService: InstitucionService,
    private toastrService: ToastrService) { }

    institucion:Institucion;
    @Output() create = new EventEmitter();
    @Output() cancel = new EventEmitter();


  ngOnInit() {
    this.institucion = new Institucion();
  }
  createInstitucion(): Institucion{
    this.institucionService.createInstitucion(this.institucion);
    this.create.emit();
    return this.institucion;
  }
  
  cancelCreation(): void{
      this.cancel.emit();
  }

}


