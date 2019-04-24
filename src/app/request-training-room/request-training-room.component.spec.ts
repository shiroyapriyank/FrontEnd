import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTrainingRoomComponent } from './request-training-room.component';

describe('RequestTrainingRoomComponent', () => {
  let component: RequestTrainingRoomComponent;
  let fixture: ComponentFixture<RequestTrainingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTrainingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTrainingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
