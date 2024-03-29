import { LugarCompetenciaDetail } from './../LugarCompetencia-detail';
import { LugarCompetenciaService } from './../LugarCompetencia.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugarCompetencia-Detail',
  templateUrl: './lugarCompetencia-Detail.component.html',
  styleUrls: ['./lugarCompetencia-Detail.component.css']
})
export class LugarCompetenciaDetailComponent implements OnInit {

  constructor(
    private compentenciaService: LugarCompetenciaService,
    private route: ActivatedRoute
  ) { }

  lugar_id: number;

  lugarCompetenciaDetail: LugarCompetenciaDetail;

  ngOnInit() {
    this.lugar_id = +this.route.snapshot.paramMap.get('id');

    this.lugarCompetenciaDetail = new LugarCompetenciaDetail;

    this.getLugarCompetenciaDetail();
    
  }

  getLugarCompetenciaDetail(): void {
    this.compentenciaService.getLugaresCompetenciaDetail(this.lugar_id)
        .subscribe(luDetail => {
            this.lugarCompetenciaDetail = luDetail
        });
  }
}
