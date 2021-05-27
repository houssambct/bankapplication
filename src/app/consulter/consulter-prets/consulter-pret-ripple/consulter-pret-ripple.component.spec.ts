import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPretRippleComponent } from './consulter-pret-ripple.component';

describe('ConsulterPretRippleComponent', () => {
  let component: ConsulterPretRippleComponent;
  let fixture: ComponentFixture<ConsulterPretRippleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterPretRippleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterPretRippleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
