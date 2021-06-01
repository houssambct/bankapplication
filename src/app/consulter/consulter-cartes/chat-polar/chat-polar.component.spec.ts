import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPolarComponent } from './chat-polar.component';

describe('ChatPolarComponent', () => {
  let component: ChatPolarComponent;
  let fixture: ComponentFixture<ChatPolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
