import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeDetailComponent } from './lenguaje-detail.component';

describe('LenguajeDetailComponent', () => {
  let component: LenguajeDetailComponent;
  let fixture: ComponentFixture<LenguajeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguajeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
