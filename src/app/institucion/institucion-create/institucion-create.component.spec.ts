import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionCreateComponent } from './institucion-create.component';

describe('InstitucionCreateComponent', () => {
  let component: InstitucionCreateComponent;
  let fixture: ComponentFixture<InstitucionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitucionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
