import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceD2Component } from './exercice-d2.component';

describe('ExerciceD2Component', () => {
  let component: ExerciceD2Component;
  let fixture: ComponentFixture<ExerciceD2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceD2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceD2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
