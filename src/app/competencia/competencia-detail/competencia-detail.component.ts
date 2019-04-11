import { CompetenciaDetail } from './../competencia-detail';
import { ActivatedRoute } from '@angular/router';
import { CompetenciaService } from './../competencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competencia-detail',
  templateUrl: './competencia-detail.component.html',
  styleUrls: ['./competencia-detail.component.css']
})
export class CompetenciaDetailComponent implements OnInit {

  constructor(
    private compentenciaService: CompetenciaService,
    private route: ActivatedRoute
  ) { }

  competencia_id: number;

  competenciadetail: CompetenciaDetail;

  ngOnInit() {
    this.competencia_id = +this.route.snapshot.paramMap.get('id');

    this.competenciadetail = new CompetenciaDetail();

    
  }

  getCompeteniaDetail(): void {
    this.compentenciaService.getCompetenciasDetail(this.competencia_id)
        .subscribe(comDetail => {
            this.competenciadetail = comDetail
        });
  }
}
