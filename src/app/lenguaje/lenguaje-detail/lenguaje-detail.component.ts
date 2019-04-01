import { ActivatedRoute } from '@angular/router';
import { LenguajeService } from '../lenguaje.service';
import { Component, OnInit } from '@angular/core';
import { LenguajeDetail } from '../lenguaje-detail';

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

  lenguajeDetail: LenguajeDetail;

  ngOnInit() {
    this.lenguaje_id = +this.route.snapshot.paramMap.get('id');
    this.lenguajeDetail = new LenguajeDetail();
    this.getLenguajeDetail();
  }

  
 getLenguajeDetail(): void {
  this.lenguajeService.getLenguajesDetail(this.lenguaje_id)
      .subscribe(lenguajeDetail => {
          this.lenguajeDetail = lenguajeDetail
      });
}

}
