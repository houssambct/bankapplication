import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterEpargneComponent } from './consulter-epargne.component';

describe('ConsulterEpargneComponent', () => {
  let component: ConsulterEpargneComponent;
  let fixture: ComponentFixture<ConsulterEpargneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterEpargneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterEpargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
