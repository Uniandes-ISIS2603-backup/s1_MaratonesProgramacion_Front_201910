import { Component, OnInit } from '@angular/core';
import {ForoService} from '../foro.service';
import { ActivatedRoute } from '@angular/router';
import { ForoDetail } from '../foro-detail';

@Component({
  selector: 'app-foro-detail',
  templateUrl: './foro-detail.component.html',
  styleUrls: ['./foro-detail.component.css']
})
export class ForoDetailComponent implements OnInit{

  constructor(
        private foroService: ForoService,
        private route: ActivatedRoute) { }

        foro_id: number;

  foroDetail: ForoDetail;

  ngOnInit() {
    this.foro_id = +this.route.snapshot.paramMap.get('id');

    this.foroDetail = new ForoDetail();
    this.getForoDetail();
  }

  getForoDetail(): void {
    this.foroService.getForosDetail(this.foro_id)
        .subscribe(forDetail => {
            this.foroDetail = forDetail
        });
  }

}
