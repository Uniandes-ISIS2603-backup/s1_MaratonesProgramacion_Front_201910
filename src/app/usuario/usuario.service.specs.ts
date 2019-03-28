import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Usuario} from './usuario';
import {UsuarioService} from './usuario.service';
import {AppModule} from '../app.module';

describe('Service: UsuarioService', () => {
    let injector: TestBed;
    let service: UsuarioService;
	const usuarios: Usuario[] = require('../../assets/usuarios.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, UsuarioService]
        });
        injector = getTestBed();
        service = injector.get(UsuarioService);
    });
	
	it('#getUsuarios should return value from observable',
    (done: DoneFn) => {
    service.getUsuarios().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
    
     it('#createUsuario should return value from observable',
    (done: DoneFn) => {
        let usuario:Usuario = {id:100,rol:"Participante",nombreUsuario:"camilalonart",nombre: "Camila",imagen:"https://farm2.staticflickr.com/1722/28018929057_d3aff402ac_b.jpg",clave:"aBc234$$bb",correo:"mc.londono@losAlpes.edu.co", puntaje:0};
        service.createUsuario(usuario).subscribe(value => {
        expect(value.nombreUsuario).toEqual(usuario.nombreUsuario);
        done();
        });
    });
	
	it('#getUsuarioDetail should return value from observable',
    (done: DoneFn) => {
    service.getUsuarioDetail(usuarios[0].id).subscribe(value => {
        expect(value.nombreUsuario).toEqual(usuarios[0].nombreUsuario);
        done();
        });
    });
	
	
	it('#updateUsuario should return the usuario updated',
    (done: DoneFn) => {
        let usuario:Usuario = {id:100,rol:"Participante",nombreUsuario:"camilalonart",nombre: "Camila",imagen:"https://farm2.staticflickr.com/1722/28018929057_d3aff402ac_b.jpg",clave:"aBc234$$bb",correo:"mc.londono@losAlpes.edu.co", puntaje:0};
        service.updateUsuario(usuario).subscribe(value => {
        expect(value.nombreUsuario).toEqual(usuario.nombreUsuario);
        done();
        });
    });
    
});