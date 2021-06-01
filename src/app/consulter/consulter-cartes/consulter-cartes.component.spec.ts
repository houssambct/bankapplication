import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCartesComponent } from './consulter-cartes.component';

describe('ConsulterCartesComponent', () => {
  let component: ConsulterCartesComponent;
  let fixture: ComponentFixture<ConsulterCartesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterCartesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
