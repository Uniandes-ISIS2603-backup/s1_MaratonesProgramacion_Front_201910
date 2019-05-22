import { LugarCompetenciaService } from './../LugarCompetencia.service';
import { LugarCompetencia } from './../lugarCompetencia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LugarCompetenciaList',
  templateUrl: './LugarCompetenciaList.component.html',
  styleUrls: ['./LugarCompetenciaList.component.css']
})
export class LugarCompetenciaListComponent implements OnInit {

 
  constructor(private lugarCompetenciaService: LugarCompetenciaService) { }

  /**
   * La lista de lugares de la competencia
   */
  lugaresCompetencia: LugarCompetencia[];

  /**
   * Le pide al servicio que actualice la lista de lugaresCompetencia
   */
  getLugaresCompetencia(): void {
    this.lugarCompetenciaService.getLugaresCompetencia().subscribe(theLugaresCompetencia => 
    this.lugaresCompetencia = theLugaresCompetencia);
  }
  ngOnInit() {
    this.getLugaresCompetencia();
  }


}
