

import { Component, OnInit, OnDestroy, ViewChild,ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';



@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {

  constructor(private equipoService: EquipoService,
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
    * The equipo's id retrieved from the address
    */
    equipo_id: number;
  
    /**
   * The equipo whose details are shown
   */
    equipo: Equipo;
  /**
   * The suscription which helps to know when a new user
   * needs to be loaded
   */
    navigationSubscription;
  
    /**
    * The method which retrieves the details of the equipo that
    * we want to show
    * @returns The equipo with its information (details)
    */
    getEquipo(): void {
      this.equipoService.getEquipo(this.equipo_id)
        .subscribe(equipo => {
            this.equipo = equipo;
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
  this.equipo_id = +this.route.snapshot.paramMap.get('id');
  this.equipo = new Equipo();
  this.getEquipo();
  //this.getAllClientes();    
}



/**
* This method helps to refresh the view when we need to load another equipo into it
* when one of the other clients in the list is clicked
*/
ngOnDestroy() {
  if (this.navigationSubscription) {
    this.navigationSubscription.unsubscribe();
  }
}
}
