import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {ForoService} from '../foro.service';
import {Foro} from '../foro';
import {ForoDetail} from '../foro-detail';

@Component({
  selector: 'app-foro-detail',
  templateUrl: './foro-detail.component.html',
  styleUrls: ['./foro-detail.component.css']
})
export class ForoDetailComponent implements OnInit, OnDestroy {

  constructor(
        private foroService: ForoService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

  ngOnInit() {
  }

}
