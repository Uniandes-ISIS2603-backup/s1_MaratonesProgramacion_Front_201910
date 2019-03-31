import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { ComentarioCreateComponent } from './comentario-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ComentarioService} from '../comentario.service';
import {Comentario} from '../comentario';


describe('ComentarioCreateComponent', () => {
	let component: ComentarioCreateComponent;
	let fixture: ComponentFixture<ComentarioCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                ComentarioService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComentarioCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
