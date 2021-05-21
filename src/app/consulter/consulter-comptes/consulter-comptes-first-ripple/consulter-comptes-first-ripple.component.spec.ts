import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterComptesFirstRippleComponent } from './consulter-comptes-first-ripple.component';

describe('ConsulterComptesFirstRippleComponent', () => {
  let component: ConsulterComptesFirstRippleComponent;
  let fixture: ComponentFixture<ConsulterComptesFirstRippleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterComptesFirstRippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterComptesFirstRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
