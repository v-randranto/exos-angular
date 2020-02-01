import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceE1Component } from './exercice-e1.component';

describe('ExerciceE1Component', () => {
  let component: ExerciceE1Component;
  let fixture: ComponentFixture<ExerciceE1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciceE1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
