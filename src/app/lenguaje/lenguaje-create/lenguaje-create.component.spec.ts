import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeCreateComponent } from './lenguaje-create.component';

describe('LenguajeCreateComponent', () => {
  let component: LenguajeCreateComponent;
  let fixture: ComponentFixture<LenguajeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguajeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
