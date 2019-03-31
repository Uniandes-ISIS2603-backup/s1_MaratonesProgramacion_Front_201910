import { ActivatedRoute } from '@angular/router';
import { LenguajeService } from '../lenguaje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenguaje-detail',
  templateUrl: './lenguaje-detail.component.html',
  styleUrls: ['./lenguaje-detail.component.css']
})
export class LenguajeDetailComponent implements OnInit {

  constructor(
    private lenguajeService: LenguajeService,
    private route: ActivatedRoute) { }

  lenguaje_id: number;

  ngOnInit() {
    this.lenguaje_id = +this.route.snapshot.paramMap.get('id');
  }

}
