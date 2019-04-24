import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-request-training-room',
  templateUrl: './request-training-room.component.html',
  styleUrls: ['./request-training-room.component.css']
})
export class RequestTrainingRoomComponent implements OnInit {
training: Training[];
train: Training = new Training();
today: any;
filterargs = {status : false};
empId: number;
  constructor(private service: EmpServiceService) { }

  ngOnInit() {
    this.today = new Date().toISOString().split('T')[0];
    this.service.getTrainingRoomwithStatus().subscribe(
      data => this.training = data,
      error => console.log(error)
    );
  }

onSubmit() {
  this.empId = +window.sessionStorage.getItem('empID');
  console.log(this.empId);
  console.log(this.train);
  this.service.updateTrainin(this.empId, this.train).subscribe(
    data => console.log(data)
  );
  this.train = new Training();
}

}
