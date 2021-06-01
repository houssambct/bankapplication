import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPieComponent } from './chat-pie.component';

describe('ChatPieComponent', () => {
  let component: ChatPieComponent;
  let fixture: ComponentFixture<ChatPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
