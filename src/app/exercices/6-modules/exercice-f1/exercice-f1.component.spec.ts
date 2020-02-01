import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceF1Component } from './exercice-f1.component';

describe('ExerciceF1Component', () => {
  let component: ExerciceF1Component;
  let fixture: ComponentFixture<ExerciceF1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceF1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
