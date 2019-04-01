import { LugarCompetenciaService } from './../LugarCompetencia.service';
import { ActivatedRoute } from '@angular/router';
import { LugarCompetenciaDetail } from './../lugarCompetenciaDetail';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lugarCompetencia-detail',
  templateUrl: './lugarCompetencia-detail.component.html',
  styleUrls: ['./lugarCompetencia-detail.component.css']
 })
 export class LugarCompetenciaDetailComponent implements OnInit {

  @Input() lugarCompetenciaDetail: LugarCompetenciaDetail;


  constructor(
    private route:ActivatedRoute,
    private lugarCompetenciaService:LugarCompetenciaService
    ) { }

    lugarCompetencia_Id: number;

    getLugarCompetenciaDetail(): void {
      this.lugarCompetenciaService.getLugarCompetenciaDetail(this.lugarCompetencia_Id)
          .subscribe(lugarCompetenciaDetail => {
              this.lugarCompetenciaDetail = lugarCompetenciaDetail
          });
  }
  ngOnInit() {
    this.lugarCompetencia_Id = +this.route.snapshot.paramMap.get('id');
    if (this.lugarCompetencia_Id){
    this.lugarCompetenciaDetail = new LugarCompetenciaDetail();
    this.getLugarCompetenciaDetail();
  }

}
}
