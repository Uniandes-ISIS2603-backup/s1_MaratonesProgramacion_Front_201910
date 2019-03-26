import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajeListComponent } from './lenguaje-list.component';

describe('LenguajeListComponent', () => {
  let component: LenguajeListComponent;
  let fixture: ComponentFixture<LenguajeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguajeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
