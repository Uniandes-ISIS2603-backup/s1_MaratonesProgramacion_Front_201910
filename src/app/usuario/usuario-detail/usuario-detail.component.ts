import { UsuarioAddSubmissionComponent } from './../usuario-add-submission/usuario-add-submission.component';
import { UsuarioAddLenguajeComponent } from './../usuario-add-lenguaje/usuario-add-lenguaje.component';
import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';
import {UsuarioDetail} from '../usuario-detail';

@Component({
    selector: 'app-usuario-detail',
    templateUrl: './usuario-detail.component.html',
    styleUrls: ['./usuario-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param usuarioService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private usuarioService: UsuarioService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The book's id retrieved from the path
    */
    usuario_id: number;

    /**
    * The book whose details are shown
    */
    bookDetail: UsuarioDetail;

    /**
    * The other books shown in the sidebar
    */
    other_users: Usuario[];

    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    showEdit: boolean;

    
    

    /**
    * The method which retrieves the details of the book that
    * we want to show
    */
    getUsuarioDetail(): void {
        this.usuarioService.getUsuarioDetail(this.usuario_id)
            .subscribe(bookDetail => {
                this.bookDetail = bookDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherBooks(): void {
        this.usuarioService.getUsuarios()
            .subscribe(books => {
                this.other_users = books;
                this.other_users = this.other_users.filter(book => book.id !== this.usuario_id);
            });
    }

    

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.usuario_id = +this.route.snapshot.paramMap.get('id');
        this.bookDetail = new UsuarioDetail();
        this.getUsuarioDetail();
        this.getOtherBooks();
        this.showEdit = true;
    }

    /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
