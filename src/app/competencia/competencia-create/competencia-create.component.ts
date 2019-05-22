import { Competencia } from './../Competencia';
import { CompetenciaService } from './../competencia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-competencia-create',
  templateUrl: './competencia-create.component.html',
  styleUrls: ['./competencia-create.component.css']
})
export class CompetenciaCreateComponent implements OnInit {

  constructor( private competenciaService: CompetenciaService,
    private toastrService: ToastrService) { }
    
  competencia: Competencia;


  @Output() create = new EventEmitter();

  @Output() cancel = new EventEmitter();


  cancelCreation(): void
  {
    this.cancel.emit();
  }

  crearCompetencia(): Competencia
  {
    this.competenciaService.postCompetencia(this.competencia).subscribe((competencia) => {
      this.competencia = competencia;
      this.create.emit();
      this.toastrService.success("la competencia fue creada", "Agregar competencia");
    })
    return this.competencia;
  }

  
  ngOnInit(){
    this.competencia = new Competencia();
  }

}
