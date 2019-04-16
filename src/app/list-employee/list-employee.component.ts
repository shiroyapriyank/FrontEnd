import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employee: Employee[];

  constructor(private service: EmpServiceService, private route: Router) { }

  ngOnInit() {
    this.service.getEmployeeList().subscribe( data => {
      this.employee = data;
      console.log(data);
  });
  }

  loadEmptoUpdate(emp) {
    window.sessionStorage.removeItem('empId');
    window.sessionStorage.setItem('empId', emp.empId.toString());
    alert(emp.empId.toString());
    this.route.navigate(['updateEmp']);
  }

  assignTask(emp) {
    window.sessionStorage.removeItem('employeeId');
    window.sessionStorage.setItem('employeeId', emp.empId.toString());
    alert(emp.empId.toString());
    this.route.navigate(['task']);
  }

}
