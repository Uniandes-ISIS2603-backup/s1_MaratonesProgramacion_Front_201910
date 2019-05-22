import { TestBed } from '@angular/core/testing';

import { LenguajeService } from './lenguaje.service';

describe('LenguajeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LenguajeService = TestBed.get(LenguajeService);
    expect(service).toBeTruthy();
  });
});
