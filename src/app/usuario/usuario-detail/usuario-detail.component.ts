import { Component, OnInit, OnDestroy, ViewChild,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  constructor(private clienteService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,    
    private modalDialogService: ModalDialogService,
    private viewRef: ViewContainerRef) { 

      //This is added so we can refresh the view when one of the clients in
        //the "Other clients" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
          if (e instanceof NavigationEnd) {
              this.ngOnInit();
        }
      });
    }

    /**
    * The usuario's id retrieved from the address
    */
    usuario_id: number;
  
    /**
   * The usuario whose details are shown
   */
    usuario: Usuario;
  /**
   * The suscription which helps to know when a new user
   * needs to be loaded
   */
    navigationSubscription;
  
    /**
    * The method which retrieves the details of the usuario that
    * we want to show
    * @returns The usuario with its information (details)
    */
    getUsuario(): void {
      this.clienteService.getUsuario(this.usuario_id)
        .subscribe(usuario => {
            this.usuario = usuario;
        }, err => {
            this.toastrService.error(err, "Error");
      });
     
    }


      /**
    * The method which initilizes the component
    * We need to initialize the clients so that
    * they are never considered undefined
    */
 ngOnInit() {
  this.usuario_id = +this.route.snapshot.paramMap.get('id');
  this.usuario = new Usuario();
  this.getUsuario();
  //this.getAllClientes();    
}



/**
* This method helps to refresh the view when we need to load another usuario into it
* when one of the other clients in the list is clicked
*/
ngOnDestroy() {
  if (this.navigationSubscription) {
    this.navigationSubscription.unsubscribe();
  }
}
}
