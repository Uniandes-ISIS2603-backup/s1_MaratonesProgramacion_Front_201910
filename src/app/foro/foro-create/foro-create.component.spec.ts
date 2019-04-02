import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { ForoCreateComponent } from './foro-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ForoService} from '../foro.service';
import {Foro} from '../foro';


describe('ForoCreateComponent', () => {
	let component: ForoCreateComponent;
	let fixture: ComponentFixture<ForoCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                ForoService,
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
        fixture = TestBed.createComponent(ForoCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});
