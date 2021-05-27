import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterMonCompteComponent } from './consulter-mon-compte.component';

describe('ConsulterMonCompteComponent', () => {
  let component: ConsulterMonCompteComponent;
  let fixture: ComponentFixture<ConsulterMonCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterMonCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterMonCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
