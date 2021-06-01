import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscrireSecondStepComponent } from './souscrire-second-step.component';

describe('SouscrireSecondStepComponent', () => {
  let component: SouscrireSecondStepComponent;
  let fixture: ComponentFixture<SouscrireSecondStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscrireSecondStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscrireSecondStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
