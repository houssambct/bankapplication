import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscrireFinalStepComponent } from './souscrire-final-step.component';

describe('SouscrireFinalStepComponent', () => {
  let component: SouscrireFinalStepComponent;
  let fixture: ComponentFixture<SouscrireFinalStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscrireFinalStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscrireFinalStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
