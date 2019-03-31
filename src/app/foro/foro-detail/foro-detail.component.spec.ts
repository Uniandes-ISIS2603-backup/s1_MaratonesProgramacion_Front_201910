import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoDetailComponent } from './foro-detail.component';

describe('ForoDetailComponent', () => {
  let component: ForoDetailComponent;
  let fixture: ComponentFixture<ForoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
