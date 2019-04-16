import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-bulk-attendance',
  templateUrl: './bulk-attendance.component.html',
  styleUrls: ['./bulk-attendance.component.css']
})
export class BulkAttendanceComponent implements OnInit {
  employee: Employee[];
  attendanceDate: Date;
  checkBox: Employee[];
  constructor(private service: EmpServiceService, private route: Router) { }
  ngOnInit() {
    this.reLoadData();
  }

  reLoadData() {
      this.service.getEmployeeList().subscribe(data => {
      this.employee = data;
      this.checkBox = data;
      console.log(data);
     });
  }
  showCheckBox() {
  }

}
