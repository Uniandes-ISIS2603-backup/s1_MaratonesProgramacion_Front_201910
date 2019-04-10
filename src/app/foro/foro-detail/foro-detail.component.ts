import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

import {ForoService} from '../foro.service';
import {Foro} from '../foro';
import {ForoDetail} from './foro-detail';

@Component({
  selector: 'app-foro-detail',
  templateUrl: './foro-detail.component.html',
  styleUrls: ['./foro-detail.component.css']
})
export class ForoDetailComponent implements OnInit{

  constructor(
        private foroService: ForoService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

        foro_id: number;

  foroDetail: ForoDetail;

  ngOnInit() {
    this.foro_id = +this.route.snapshot.paramMap.get('id');
    
    this.foroDetail = new ForoDetail();
    this.getForosDetail();
  }

  getForosDetail(): void {
    this.foroService.getForosDetail(this.foro_id)
        .subscribe(ejerDetail => {
            this.foroDetail = ejerDetail
        });

}
