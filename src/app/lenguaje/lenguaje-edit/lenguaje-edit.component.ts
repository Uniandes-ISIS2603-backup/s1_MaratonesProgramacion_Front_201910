import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {LenguajeDetail} from '../lenguaje-detail';
import {LenguajeService} from '../lenguaje.service';

@Component({
  selector: 'app-lenguaje-edit',
  templateUrl: './lenguaje-edit.component.html',
  styleUrls: ['./lenguaje-edit.component.css']
})
export class LenguajeEditComponent implements OnInit {

  constructor(private toastrService: ToastrService,
    private lenguajeService: LenguajeService) { }

  
  /**
   *
   *
   * @type {number}
   * @memberof LenguajeEditComponent
   */
  @Input() lenguaje_id: number;    

  /**
   *
   *
   * @memberof LenguajeEditComponent
   */
  @Output() cancel = new EventEmitter();
  
  /**
   *
   *
   * @memberof LenguajeEditComponent
   */
  @Output() update = new EventEmitter();

  /**
   * Lenguaje a editar
   */
  lenguaje: LenguajeDetail;



    /**
    * Retorna la informacion del lenguaje
    */
   getLenguaje(): void {
    this.lenguajeService.getLenguajesDetail(this.lenguaje_id)
        .subscribe(editorial => {
            this.lenguaje = editorial;
        });
}

/**
 *
 *Metodo que permite actualizar el lenguaje con la informacion modificada
 * @memberof LenguajeEditComponent
 */
editLenguaje(): void{

    this.lenguajeService.editLenguaje(this.lenguaje)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("La informacion del lenguaje ha sido modificada", "Modificar lenguaje");
            });
  }


      /**
    * Informa al componente padre que se cancelo la opercion de editar el lenguaje
    */
   cancelEdition(): void {
    this.cancel.emit();
}

  ngOnInit() {
    this.lenguaje = new LenguajeDetail();
    this.getLenguaje();
  }

}
