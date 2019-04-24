import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMeetingRoomComponent } from './request-meeting-room.component';

describe('RequestMeetingRoomComponent', () => {
  let component: RequestMeetingRoomComponent;
  let fixture: ComponentFixture<RequestMeetingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestMeetingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMeetingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
