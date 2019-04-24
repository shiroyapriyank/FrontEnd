import { Component, OnInit, Input } from '@angular/core';
import { Leave } from '../leave';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-leave-request',
  templateUrl: './list-leave-request.component.html',
  styleUrls: ['./list-leave-request.component.css']
})
export class ListLeaveRequestComponent implements OnInit {
leave: Leave[];
  constructor(private service: EmpServiceService, private route: Router) { }

  ngOnInit() {
    this.reLoad();
  }

 private reLoad() {
    this.service.getLeaveRequest().subscribe(data => {
      this.leave = data;
      console.log(data);
    });
  }

  onClick(leave: Leave) {
    console.log(leave.empID + ' ' + leave.status);
    console.log(this.leave);
   /*  this.service.updateLeaveRequest(id, status).subscribe(
      data => console.log(data)
    );
    this.route.navigate(['empHome']); */
  }

  updateActive(isActive: boolean, empId: number) {
    console.log(isActive);
    console.log(empId);
    this.service.updateLeaveRequest(empId, isActive).subscribe(
      data => {
        console.log(data);
      }
    );
    this.reLoad();
  }

}
