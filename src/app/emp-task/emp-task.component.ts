import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Task } from '../task';
import { Employee } from '../employee';
import { empty } from 'rxjs';

@Component({
  selector: 'app-emp-task',
  templateUrl: './emp-task.component.html',
  styleUrls: ['./emp-task.component.css']
})
export class EmpTaskComponent implements OnInit {
tasks: Task[];
private empId;


  constructor(private service: EmpServiceService) { }

  ngOnInit() {
    this.empId = window.sessionStorage.getItem('empID');
    alert(this.empId);
    this.reLoad();
  }
  reLoad() {
    this.service.getTaskById(+this.empId).subscribe(
      data => {
        this.tasks = data;
        console.log(data);
    },
    error => console.log(error)
    );
  }

  onSubmit(task: Task) {
    this.service.updateStatus(this.tasks).subscribe(
      data => console.log(data),
      error => console.log(error)
    );

  }

}
