import { LugarCompetencia } from './../lugarCompetencia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LugarCompetenciaList',
  templateUrl: './LugarCompetenciaList.component.html',
  styleUrls: ['./LugarCompetenciaList.component.css']
})
export class LugarCompetenciaListComponent implements OnInit {

  lugaresCompetencia: LugarCompetencia[];
  constructor() { }

  ngOnInit() {
  }


}
