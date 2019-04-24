import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulk-attendance',
  templateUrl: './bulk-attendance.component.html',
  styleUrls: ['./bulk-attendance.component.css']
})
export class BulkAttendanceComponent implements OnInit {
  employee: Employee[];
  attendanceDate: Date;
  isPresent = false;
  userIds = [];
  constructor(private service: EmpServiceService, private route: Router) {
   }
  ngOnInit() {
    this.reLoadData();
    }

  reLoadData() {
    this.service.getEmployeeList().subscribe(data => {
    this.employee = data;
    console.log(data);

   });

  }

  onSubmit() {
  console.log(this.employee);
  this.userIds = [];

  for (let  i = 0; i < this.employee.length; i++) {
      if (+this.employee[i].empId !== 0) {
        this.userIds[i] = this.employee[i].empId;
      }
   }
  console.log(this.userIds);
  console.log(this.attendanceDate);
  this.service.isPresent(this.attendanceDate, this.userIds).subscribe(
    data => console.log(data)
  );
  this.route.navigate(['viewPresent']);
  }

}
