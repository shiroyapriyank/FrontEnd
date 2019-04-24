import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Attendance } from '../attendance';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {
  attendanceDate: Date;
  attendance: Attendance[];
  constructor(private service: EmpServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.attendanceDate);
    this.service.getAttendanceByDate(this.attendanceDate).subscribe(
      data => {
        this.attendance = data;
        console.log(data);
      }
    );
  }
}
