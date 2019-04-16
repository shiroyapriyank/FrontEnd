import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-list-meeting-room',
  templateUrl: './list-meeting-room.component.html',
  styleUrls: ['./list-meeting-room.component.css']
})
export class ListMeetingRoomComponent implements OnInit {
meeting: Meeting[];
  constructor(private service: EmpServiceService) { }

  ngOnInit() {
    this.service.getMeetingRoom().subscribe(
      data => {
          this.meeting = data;
          console.log(data);
        },
      error => console.log(error)
    );
  }

}
