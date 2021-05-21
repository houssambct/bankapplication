import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterComptesComponent } from './consulter-comptes.component';

describe('ConsulterComptesComponent', () => {
  let component: ConsulterComptesComponent;
  let fixture: ComponentFixture<ConsulterComptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterComptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
