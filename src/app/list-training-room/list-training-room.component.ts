import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-list-training-room',
  templateUrl: './list-training-room.component.html',
  styleUrls: ['./list-training-room.component.css']
})
export class ListTrainingRoomComponent implements OnInit {
training: Training[];
  constructor(private service: EmpServiceService) { }

  ngOnInit() {
    this.service.getTrainingRoom().subscribe(
      data => {
        this.training = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }

}
