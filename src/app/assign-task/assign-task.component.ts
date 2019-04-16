import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';
import { Employee } from '../employee';
import { Task } from '../task';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  task: Task = new Task();
  empId: number;
  constructor(private router: Router, private service: EmpServiceService) { }

  ngOnInit() {
    this.empId = + window.sessionStorage.getItem('employeeId');
    alert(this.empId);
    if (!this.empId) {
      alert('Invalid action.');
      this.router.navigate(['list']);
      return;
    }
    this.task.empID = this.empId;
  }
  onSubmit() {
    this.service.assignTask(this.task).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.router.navigate(['/list']);
  }

}
