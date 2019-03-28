
import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import {Usuario} from './usuario';

describe('UsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  const usuarios: Usuario[] = require('../../assets/usuarios.json');
  const service: UsuarioService = TestBed.get(UsuarioService);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getUsuarioDetail should return value from observable',
    (done: DoneFn) => {
    service.getUsuarioDetail(usuarios[0].id).subscribe(value => {
        expect(value.nombreUsuario).toEqual(usuarios[0].nombreUsuario);
        done();
        });
    });
});