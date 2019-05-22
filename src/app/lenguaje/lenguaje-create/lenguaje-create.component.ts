import { LenguajeService } from './../lenguaje.service';
import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Lenguaje} from './../lenguaje';

@Component({
  selector: 'app-lenguaje-create',
  templateUrl: './lenguaje-create.component.html',
  styleUrls: ['./lenguaje-create.component.css']
})
export class LenguajeCreateComponent implements OnInit {

  constructor(private toastrService: ToastrService,
    private lenguajeService: LenguajeService) { }


  lenguaje: Lenguaje;

  
  @Output() create = new EventEmitter();

  @Output() cancel = new EventEmitter();

  cancelCreation(): void
  {
    this.cancel.emit();
  }

  crearLenguaje(): Lenguaje
  {
      this.lenguajeService.createLenguaje(this.lenguaje).subscribe((lenguaje) => {
        this.lenguaje = lenguaje;
        this.create.emit();
        this.toastrService.success("El lenguaje fue creado", "Agregar lenguaje");
      })
      return this.lenguaje;
  }

  
  ngOnInit() {
    this.lenguaje = new Lenguaje();
  }



}
