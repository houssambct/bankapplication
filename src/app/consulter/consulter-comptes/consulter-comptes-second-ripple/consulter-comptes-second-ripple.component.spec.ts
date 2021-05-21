import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterComptesSecondRippleComponent } from './consulter-comptes-second-ripple.component';

describe('ConsulterComptesSecondRippleComponent', () => {
  let component: ConsulterComptesSecondRippleComponent;
  let fixture: ComponentFixture<ConsulterComptesSecondRippleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterComptesSecondRippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterComptesSecondRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
