import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {ForoService} from '../foro.service';

import {Foro} from '../foro';

@Component({
    selector: 'app-foro-create',
    templateUrl: './foro-create.component.html',
    styleUrls: ['./foro-create.component.css']
})
export class ForoCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param foroService The editorials' services provider
    * @param toastrService The toastr para mostrar mensajes al usuario. 
    */
    constructor(
        private foroService: ForoService,
        private toastrService: ToastrService
    ) {}

    /**
    * El nuevo foro
    */
    foro: Foro;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new editorial
    */
    @Output() create = new EventEmitter();

    /**
    * crea un nuevo Foro
    */
    createForo(): Foro {
        this.foroService.createForo(this.foro)
            .subscribe((foro) => {
                this.foro = foro;
                this.create.emit();
                this.toastrService.success("The Foro was created", "Foro creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.foro;
    }

    /**
    * Informs the parent component that the user no longer wants to create a Foro
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.foro = new Foro();
    }
}
