import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainingRoomComponent } from './list-training-room.component';

describe('ListTrainingRoomComponent', () => {
  let component: ListTrainingRoomComponent;
  let fixture: ComponentFixture<ListTrainingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTrainingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrainingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
