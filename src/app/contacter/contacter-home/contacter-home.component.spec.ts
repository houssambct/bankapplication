import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterHomeComponent } from './contacter-home.component';

describe('ContacterHomeComponent', () => {
  let component: ContacterHomeComponent;
  let fixture: ComponentFixture<ContacterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
