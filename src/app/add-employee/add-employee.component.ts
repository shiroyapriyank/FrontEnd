import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
createEmployee: Employee = new Employee();

  constructor(private route: Router, private empService: EmpServiceService) { }

  ngOnInit() {
  }
  save() {
    this.empService.createEmployee(this.createEmployee).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.createEmployee = new Employee();
    this.route.navigate(['/list']);
  }
  onSubmit() {
    this.save();
    this.createEmployee = new Employee();
  }

}
