import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStatComponent } from './message-stat.component';

describe('MessageStatComponent', () => {
  let component: MessageStatComponent;
  let fixture: ComponentFixture<MessageStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
