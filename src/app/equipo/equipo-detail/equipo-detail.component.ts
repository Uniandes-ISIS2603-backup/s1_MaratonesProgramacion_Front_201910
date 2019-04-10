import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {

  constructor(private usuarioService: EquipoService,
  private route: ActivatedRoute) { }

  Equipo_id: number;

  equipo: Equipo;

  getEquipoDetail(): void
  {
    this.usuarioService.getEquipoPorId(this.Equipo_id).subscribe(EquipoDetail =>{ this.equipo = EquipoDetail});
  }

  ngOnInit() {
    this.Equipo_id =+ this.route.snapshot.paramMap.get('id');
    this.equipo = new Equipo();
    this.getEquipoDetail();
  }

}