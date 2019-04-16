import { Component, OnInit } from '@angular/core';
import { Training } from '../training';
import { Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-add-training-room',
  templateUrl: './add-training-room.component.html',
  styleUrls: ['./add-training-room.component.css']
})
export class AddTrainingRoomComponent implements OnInit {
training: Training = new Training();
  constructor(private route: Router, private service: EmpServiceService) { }

  ngOnInit() {
  }

  save() {
    this.service.addTrainingRoom(this.training).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.route.navigate(['/trainingList']);
  }

  onSubmit() {
    this.save();
    this.training = new Training();
  }
}
