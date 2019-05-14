import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeDeleteComponent } from './lenguaje-delete.component';

describe('LenguajeDeleteComponent', () => {
  let component: LenguajeDeleteComponent;
  let fixture: ComponentFixture<LenguajeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguajeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
