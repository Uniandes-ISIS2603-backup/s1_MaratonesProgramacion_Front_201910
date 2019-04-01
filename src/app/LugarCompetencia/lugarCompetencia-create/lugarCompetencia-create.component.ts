import { LugarCompetenciaService } from './../LugarCompetencia.service';
import { LugarCompetencia } from './../lugarCompetencia';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-lugarCompetencia-create',
  templateUrl: './lugarCompetencia-create.component.html',
  styleUrls: ['./lugarCompetencia-create.component.css']
})
export class LugarCompetenciaCreateComponent implements OnInit {

  constructor( 
    private dp : DatePipe,
    private lugarCompetenciaService: LugarCompetenciaService,
    private toastrService: ToastrService
    ) { 
    
  }
  lugarCompetencia: LugarCompetencia;
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new author
  */
  @Output() create = new EventEmitter();

  /**
  * Creates an author
  */
  createLugarCompetencia(): LugarCompetencia {
      console.log(this.lugarCompetencia);
        this.lugarCompetenciaService.createLugarCompetencia(this.lugarCompetencia)
          .subscribe((lugarCompetencia) => {
              this.lugarCompetencia = lugarCompetencia;
              this.create.emit();
              this.toastrService.success("The lugarCompetencia was created", "lugarCompetencia creation");
              
          });
          return this.lugarCompetencia;
  }

  /**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create a lugarCompetencia
  */
  cancelCreation(): void {
      this.cancel.emit();
  }

  /**
  * This function will initialize the component
  */
  ngOnInit() {
      this.lugarCompetencia = new LugarCompetencia();
  }


}
