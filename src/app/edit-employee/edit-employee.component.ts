import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';
import { Employee } from '../employee';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  editForm: FormGroup;
  empId: number;
 // updateEmp: Employee = new Employee();
 updateEmps: Employee[];
  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmpServiceService) { }

  ngOnInit() {
    this.empId = + window.sessionStorage.getItem('empId');
    if (!this.empId) {
      alert('Invalid action.');
      this.router.navigate(['list']);
      return;
    }
    this.service.getEmployeeById(+this.empId).subscribe(data => {this.updateEmps = data; console.log(data); }); }

  onSubmit(empL: Employee) {
    console.log(empL);
    this.service.updateEmployee(empL.empId, empL).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.router.navigate(['/list']);
}
}
