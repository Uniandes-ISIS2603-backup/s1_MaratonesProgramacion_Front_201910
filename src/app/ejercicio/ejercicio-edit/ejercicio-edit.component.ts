import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {EjercicioService} from '../ejercicio.service';
import {EjercicioDetail} from '../ejercicio-detail';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ejercicio-edit',
  templateUrl: './ejercicio-edit.component.html',
  styleUrls: ['./ejercicio-edit.component.css']
})
export class EjercicioEditComponent implements OnInit {

  constructor( private toastrService: ToastrService,
    private ejercicioService: EjercicioService) { }



  /*
   *El id del ejercicio recibido del componente padre
   *
   * @type {EjercicioDetail}
   * @memberof EjercicioEditComponent
   */
  @Input() ejercicio: EjercicioDetail;

  /**
   *El output que le dice al componente padre
   *que el usuario no pudo o quiere editar el ejercicio
   * @memberof EjercicioEditComponent
   */
  @Output() cancel = new EventEmitter();

  /**
   *El output que le dice al componente padre
   *logro editar exitosamente el ejercicio
   * @memberof EjercicioEditComponent
   */
  @Output() update = new EventEmitter();

  /**
   *Metodo que permite modificar el ejercicio
   *
   * @memberof EjercicioEditComponent
   */
  editEjercicio(): void {
    this.ejercicioService.putEjercicio(this.ejercicio)
    .subscribe(() => {
      this.toastrService.success("La informacion del ejercicio ha sido modificada exitossamente", "Modificar el Ejercicio");
    })
    this.update.emit();
  }


  /**
   *Metodo para cancelar la operacion
   *
   * @memberof EjercicioEditComponent
   */
  cancelEdition(): void{
    this.cancel.emit();
  }


  /**
   * Metodo que inicializa el componente
   */
  ngOnInit() {
    this.editEjercicio();
  }

  /**
   * Esta funcion se llamara cuando el usuario quiera modificar otro ejercicio
   */
  ngOnChanges() {
    this.ngOnInit();
  }

}
