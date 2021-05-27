import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacterDateComponent } from './contacter-date.component';

describe('ContacterDateComponent', () => {
  let component: ContacterDateComponent;
  let fixture: ComponentFixture<ContacterDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacterDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacterDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
