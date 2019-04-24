import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  user: Employee;
  constructor(private service: EmpServiceService) { }

  ngOnInit() {
    window.sessionStorage.removeItem('empID');
    this.service.checkEmail(window.sessionStorage.getItem('username')).subscribe(
      data => {
        this.user = data;
        console.log(this.user);
        window.sessionStorage.setItem('empID', this.user.empId.toString());
      },
    error => console.log(error));
  }
}
