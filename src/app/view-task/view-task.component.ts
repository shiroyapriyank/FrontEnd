import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
task: Task[];
  constructor(private taskService: EmpServiceService) { }

  ngOnInit() {
    this.taskService.getTaskList().subscribe(data => {
      this.task = data;
      console.log(data);
    });
  }

}
