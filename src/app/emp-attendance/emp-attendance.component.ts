import { Component, OnInit } from '@angular/core';
import { Attendance } from '../attendance';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-attendance',
  templateUrl: './emp-attendance.component.html',
  styleUrls: ['./emp-attendance.component.css']
})
export class EmpAttendanceComponent implements OnInit {
  attendanceDate: Date;
  attendance: Attendance[];
  empId: number;
  constructor(private service: EmpServiceService) { }

  ngOnInit() {
    this.empId = + window.sessionStorage.getItem('empID');
  }

  onSubmit() {
    console.log(this.attendanceDate);
    this.service.getAttendanceByDateAndId(this.attendanceDate, this.empId).subscribe(
      data => {
        this.attendance = data;
        console.log(data);
      }
    );
  }

}
