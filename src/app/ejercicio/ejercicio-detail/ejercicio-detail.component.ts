import { Component, OnInit } from '@angular/core';
import {EjercicioService} from '../ejercicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejercicio-detail',
  templateUrl: './ejercicio-detail.component.html',
  styleUrls: ['./ejercicio-detail.component.css']
})
export class EjercicioDetailComponent implements OnInit {

  constructor(
    private ejercicioService: EjercicioService,
    private route: ActivatedRoute) { }

  ejercicio_id: number;

  ngOnInit() {
    this.ejercicio_id = +this.route.snapshot.paramMap.get('id');
  }

}
