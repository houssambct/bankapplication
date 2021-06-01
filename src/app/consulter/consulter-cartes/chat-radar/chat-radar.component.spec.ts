import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRadarComponent } from './chat-radar.component';

describe('ChatRadarComponent', () => {
  let component: ChatRadarComponent;
  let fixture: ComponentFixture<ChatRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
