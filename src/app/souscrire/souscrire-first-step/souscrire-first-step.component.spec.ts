import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscrireFirstStepComponent } from './souscrire-first-step.component';

describe('SouscrireFirstStepComponent', () => {
  let component: SouscrireFirstStepComponent;
  let fixture: ComponentFixture<SouscrireFirstStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouscrireFirstStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouscrireFirstStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
