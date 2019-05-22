/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LugarCompetenciaService } from './LugarCompetencia.service';

describe('Service: LugarCompetencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LugarCompetenciaService]
    });
  });

  it('should ...', inject([LugarCompetenciaService], (service: LugarCompetenciaService) => {
    expect(service).toBeTruthy();
  }));
});
