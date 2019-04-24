import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {
  today: any;
  leave: Leave = new Leave();
  constructor(private service: EmpServiceService, private route: Router) { }

  ngOnInit() {
    this.today = new Date().toISOString().split('T')[0];
  }

  onSubmit() {
    this.leave.empID = + window.sessionStorage.getItem('empID');
    this.service.addLeaveRequest(this.leave).subscribe(
      data => console.log(data)
    );
    this.route.navigate(['empHome']);
  }

}
