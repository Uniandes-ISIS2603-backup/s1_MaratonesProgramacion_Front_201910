import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeEditComponent } from './lenguaje-edit.component';

describe('LenguajeEditComponent', () => {
  let component: LenguajeEditComponent;
  let fixture: ComponentFixture<LenguajeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguajeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
