import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterPhoneComponent } from './contacter-phone.component';

describe('ContacterPhoneComponent', () => {
  let component: ContacterPhoneComponent;
  let fixture: ComponentFixture<ContacterPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacterPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacterPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
