/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LugarCompetenciaDetailComponent } from './lugarCompetencia-detail.component';

describe('LugarCompetenciaDetailComponent', () => {
  let component: LugarCompetenciaDetailComponent;
  let fixture: ComponentFixture<LugarCompetenciaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarCompetenciaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarCompetenciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
