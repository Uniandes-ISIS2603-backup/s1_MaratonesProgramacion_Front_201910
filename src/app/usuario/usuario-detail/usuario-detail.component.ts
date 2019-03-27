import { UsuarioAddLenguajeComponent } from './../usuario-add-lenguaje/usuario-add-lenguaje.component';
import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';
import {UsuarioDetail} from '../usuario-detail';
import {UsuarioAddSubmissionComponent} from '../usuario-add-submission';
import {UsuarioAddLenguajewComponent} from '../usuario-add-lenguaje';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
) {
    //This is added so we can refresh the view when one of the books in
    //the "Other books" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
            this.ngOnInit();
        }
    });
}

  ngOnInit() {
  }

}
