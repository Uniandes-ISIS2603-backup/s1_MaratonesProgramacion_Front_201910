// import {Component, OnInit, ViewChild} from '@angular/core';
// import {DatePipe} from '@angular/common';
// import {Router, ActivatedRoute} from '@angular/router';
// import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
// import {Observable, Subject, merge} from 'rxjs';
// import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
// import {ToastrService} from 'ngx-toastr';
//
// import {ForoService} from '../foro.service';
// import {ComentarioService} from '../../comentario/comentario.service';
//
// import {ForoDetail} from '../foro-detail';
// import {Comentario} from '../../comentario/comentario';
//
// @Component({
//     selector: 'app-foro-edit',
//     templateUrl: './foro-edit.component.html',
//     styleUrls: ['./foro-edit.component.css'],
//     providers: [DatePipe]
// })
// export class ForoEditComponent implements OnInit {
//
//     /**
//     * The constructor of the component
//     * @param bookService The book service which communicates with the API
//     * @param authorService The author service which communicates with the API
//     * @param editorialService The editorial service which communicates with the API
//     * @param toastrService The toastr to show messages to the user
//     * @param router The router which is needed to know when the component needs to reload
//     * @param route The route which helps to retrieves the id of the book to be shown
//     */
//     constructor(
//         private dp: DatePipe,
//         private foroService: ForoService,
//         private comentarioService: ComentarioService,
//         private toastrService: ToastrService,
//         private router: Router,
//         private route: ActivatedRoute
//     ) {}
//
//     model: any;
//     /**
//     * The foro which will be updated
//     */
//     foro: ForoDetail
//
//     foro_id: number;
//     /**
//     * The list of every author in the BookStore
//     */
//     comentarios: Comentario[];
//
//     @ViewChild('instance') instance: NgbTypeahead;
//     focus$ = new Subject<string>();
//     click$ = new Subject<string>();
//
//     formatter = (x: {name: string}) => x.name;
//
//
//     /**
//     * This function updates the book
//     */
//     updateForo(): void {
//
//         this.foroService.updateForo(this.foro)
//             .subscribe(() => {
//                 this.router.navigate(['/foros/' + this.foro.id]);
//             });
//     }
//
//     /**
//     * The function which initilizes the component
//     */
//     ngOnInit() {
//         this.foro_id = +this.route.snapshot.paramMap.get('id');
//     }
//
//
// }
