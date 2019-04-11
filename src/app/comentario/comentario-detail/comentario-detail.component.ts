import { Component, OnInit } from '@angular/core';
import {comentarioService} from '../comentario.service';
import { ActivatedRoute } from '@angular/router';
import { ComentarioDetail } from '../comentario-detail';

@Component({
  selector: 'app-comentario-detail',
  templateUrl: './comentario-detail.component.html',
  styleUrls: ['./comentario-detail.component.css']
})
export class ComentarioDetailComponent implements OnInit {

  constructor(
        private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
