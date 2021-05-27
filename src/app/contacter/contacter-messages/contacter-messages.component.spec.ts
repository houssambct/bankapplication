import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterMessagesComponent } from './contacter-messages.component';

describe('ContacterMessagesComponent', () => {
  let component: ContacterMessagesComponent;
  let fixture: ComponentFixture<ContacterMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacterMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacterMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
