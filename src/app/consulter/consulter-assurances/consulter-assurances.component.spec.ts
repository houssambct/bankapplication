import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAssurancesComponent } from './consulter-assurances.component';

describe('ConsulterAssurancesComponent', () => {
  let component: ConsulterAssurancesComponent;
  let fixture: ComponentFixture<ConsulterAssurancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterAssurancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterAssurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
