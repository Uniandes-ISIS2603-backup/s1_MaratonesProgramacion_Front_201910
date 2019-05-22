import { LugarCompetencia } from './../lugarCompetencia';
import { LugarCompetenciaService } from './../LugarCompetencia.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lugarCompetencia-create',
  templateUrl: './lugarCompetencia-create.component.html',
  styleUrls: ['./lugarCompetencia-create.component.css']
})
export class LugarCompetenciaCreateComponent implements OnInit {

  constructor( private lugarCompetenciaService: LugarCompetenciaService,
    private toastrService: ToastrService) { }
    
  lugarCompetencia: LugarCompetencia;


  @Output() create = new EventEmitter();

  @Output() cancel = new EventEmitter();


  cancelCreation(): void
  {
    this.cancel.emit();
  }

  crearlugarCompetencia(): LugarCompetencia
  {
    this.lugarCompetenciaService.postLugarCompetencia(this.lugarCompetencia).subscribe((lugarCompetencia) => {
      this.lugarCompetencia = lugarCompetencia;
      this.create.emit();
      this.toastrService.success("la lugarCompetencia fue creada", "Agregar lugarCompetencia");
    })
    return this.lugarCompetencia;
  }

  
  ngOnInit(){
    this.lugarCompetencia = new LugarCompetencia();
  }
}
