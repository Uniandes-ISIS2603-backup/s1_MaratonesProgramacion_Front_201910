import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Usuario} from './Usuario';
//import {Lenguaje} from './lenguaje';
import {UsuarioService} from './Usuario.service';
import {AppModule} from '../app.module';


describe('Service: UsuarioService', () => {
    let injector: TestBed;
    let service: UsuarioService;
	const usuarios: Usuario[] = require('../../assets/usuarios.json');
	//const lenguajes: Lenguaje[] = require('../../assets/lenguajes.json');
    
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
   let usuario:Usuario = {id:0,name:"Prueba",isbn:"987612345",publishingdate: "2017/01/06",image:"Prueba",description:"Prueba",editorial:{ id: 100, name: "Oveja Negra"}};
    service.createUsuario(usuario).subscribe(value => {
        expect(value.name).toEqual(usuario.name);
        done();
        });
    });
	
	it('#getUsuarioDetail should return value from observable',
    (done: DoneFn) => {
    service.getUsuarioDetail(usuarios[0].id).subscribe(value => {
        expect(value.name).toEqual(usuarios[0].name);
        done();
        });
    });
	/*it('#createLenguaje should return value from observable',
    (done: DoneFn) => {
    service.createLenguaje(usuarios[0].id,lenguajes[0]).subscribe(value => {
        expect(value.name).toEqual(lenguajes[0].name);
        done();
        });
    });
	*/
	it('#updateUsuario should return the usuario updated',
    (done: DoneFn) => {
	let usuario:Usuario = {id:100,name:"Prueba",isbn:"987612345",publishingdate: "2017/01/06",image:"Prueba",description:"Prueba",editorial:{ id: 100, name: "Oveja Negra"}};
    service.updateUsuario(usuario).subscribe(value => {
        expect(value.name).toEqual(usuario.name);
        done();
        });
    });
    
});