import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkAttendanceComponent } from './bulk-attendance.component';

describe('BulkAttendanceComponent', () => {
  let component: BulkAttendanceComponent;
  let fixture: ComponentFixture<BulkAttendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkAttendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
