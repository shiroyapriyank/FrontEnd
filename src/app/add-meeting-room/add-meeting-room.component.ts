import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { Router } from '@angular/router';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-add-meeting-room',
  templateUrl: './add-meeting-room.component.html',
  styleUrls: ['./add-meeting-room.component.css']
})
export class AddMeetingRoomComponent implements OnInit {
meeting: Meeting = new Meeting();
  constructor(private route: Router, private service: EmpServiceService) { }

  ngOnInit() {
  }

  save() {
    this.service.addMeetingRoom(this.meeting).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.route.navigate(['/meetingList']);
  }

  onSubmit() {
    this.save();
    this.meeting = new Meeting();
  }

}
