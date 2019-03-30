import { CompetenciaService } from './../competencia.service';
import { Competencia } from './../Competencia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'competenciaList',
  templateUrl: './competenciaList.component.html',
  styleUrls: ['./competenciaList.component.css']
})
export class CompetenciaListComponent implements OnInit {

  competencias: Competencia[];
  constructor(private competenciaService: CompetenciaService) { }

  getCompetencias(): void {
    this.competenciaService.getCompetencias().subscribe(theCompetencias => 
    this.competencias = theCompetencias);
  }
  ngOnInit() {
    this.getCompetencias();
  }
}
