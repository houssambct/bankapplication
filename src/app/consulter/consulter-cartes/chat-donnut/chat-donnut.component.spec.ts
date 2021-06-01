import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDonnutComponent } from './chat-donnut.component';

describe('ChatDonnutComponent', () => {
  let component: ChatDonnutComponent;
  let fixture: ComponentFixture<ChatDonnutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDonnutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDonnutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
