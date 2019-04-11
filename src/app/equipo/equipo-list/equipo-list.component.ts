import { Component, OnInit } from '@angular/core';
import {Equipo} from '../equipo';
import {EquipoService} from '../equipo.service';
@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {



  constructor(private usuarioService: EquipoService) { }

  equipos: Equipo[];

    getEquipos(): void {
      this.usuarioService.getEquipos().subscribe(equipos => this.equipos = equipos);
  }


  ngOnInit() {
      this.getEquipos();
  }

}

