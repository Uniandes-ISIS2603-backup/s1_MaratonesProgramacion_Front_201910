import { EjercicioService } from './../ejercicio.service';
import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Ejercicio} from './../ejercicio';

@Component({
  selector: 'app-ejercicio-create',
  templateUrl: './ejercicio-create.component.html',
  styleUrls: ['./ejercicio-create.component.css']
})
export class EjercicioCreateComponent implements OnInit {

  constructor(private ejercicioService: EjercicioService,
    private toastrService: ToastrService) { }

  ejercicio: Ejercicio;

  @Output() create = new EventEmitter();

  @Output() cancel = new EventEmitter();


  cancelCreation(): void
  {
    this.cancel.emit();
  }

  crearEjercicio(): Ejercicio
  {
    this.ejercicioService.postEjercicio(this.ejercicio).subscribe((ejer) => {
      this.ejercicio = ejer;
      this.create.emit();
      this.toastrService.success("el ejercicio fue creado", "Agregar ejercicio");
    })
    return this.ejercicio;
  }

  ngOnInit() {
    this.ejercicio = new Ejercicio();
  }

}
