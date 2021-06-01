import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatScatterComponent } from './chat-scatter.component';

describe('ChatScatterComponent', () => {
  let component: ChatScatterComponent;
  let fixture: ComponentFixture<ChatScatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatScatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
