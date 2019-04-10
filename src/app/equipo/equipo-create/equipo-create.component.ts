import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipo-create',
  templateUrl: './equipo-create.component.html',
  styleUrls: ['./equipo-create.component.css']
})
export class EquipoCreateComponent implements OnInit {

  
  /**
  * Constructor for the component of equipo-create
  * @param clienteService The client's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
  private equipoService: EquipoService,
  private toastrService: ToastrService,
  private router: Router
  ) { }

  /**
  * El nuevo equipo que sera creado
  */
  equipo: Equipo;

  /**
  * The output which tells the parent component
  * that the user no longer wants to create a client
  */
  @Output() cancel = new EventEmitter();

  /**
  * The output which tells the parent component
  * that the user created a new client
  */
  @Output() create = new EventEmitter();

  /**
  * Creates an empleado
  */
  createEquipo(): Equipo {
    console.log(this.equipo);
    this.equipoService.createEquipo(this.equipo)
      .subscribe((equipo) => {
        this.equipo = equipo;
        this.create.emit();
        this.router.navigate(['/equipos/list']);
        this.toastrService.success('El equipo se creó exitosamente!', 'Creación equipo');
      });
    return this.equipo;
  }

  /**
  * Emits the signal to tell the parent component that the
  * user no longer wants to create a client
  */
  cancelCreation(): void {
      this.cancel.emit();
      this.router.navigate(['/equipos/list']);
  }
  /**
  * This function will initialize the component
  */
  ngOnInit() {
      this.equipo = new Equipo();
  }

}
