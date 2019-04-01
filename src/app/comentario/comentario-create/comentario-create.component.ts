import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {ComentarioService} from '../comentario.service';

import {Comentario} from '../comentario';

@Component({
    selector: 'app-comentario-create',
    templateUrl: './comentario-create.component.html',
    styleUrls: ['./comentario-create.component.css']
})
export class ComentarioCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param comentarioService el provedor de servicios
    * @param toastrService The toastr para mostrar mensajes al usuario. 
    */
    constructor(
        private comentarioService: ComentarioService,
        private toastrService: ToastrService
    ) {}

    /**
    * El nuevo Comentario
    */
    comentario: Comentario;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create a Comentario
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new Comentario
    */
    @Output() create = new EventEmitter();

    /**
    * crea un nuevo Comentario
    */
    createComentario(): Comentario {
        this.comentarioService.createComentario(this.comentario)
            .subscribe((comentario) => {
                this.comentario = comentario;
                this.create.emit();
                this.toastrService.success("The Comentario was created", "Comentario creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.comentario;
    }

    /**
    * Informs the parent component that the user no longer wants to create a Comentario
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.comentario = new Comentario();
    }
}
