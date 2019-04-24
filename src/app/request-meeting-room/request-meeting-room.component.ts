import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-request-meeting-room',
  templateUrl: './request-meeting-room.component.html',
  styleUrls: ['./request-meeting-room.component.css']
})
export class RequestMeetingRoomComponent implements OnInit {
  meeting: Meeting[];
  meet: Meeting = new Meeting();
  today: any;
  empId: number;
  constructor(private service: EmpServiceService) { }

  ngOnInit() {
    this.today = new Date().toISOString().split('T')[0];
    this.service.getMeetingRoomwithStatus().subscribe(
      data => {
      this.meeting = data;
    },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.empId = +window.sessionStorage.getItem('empID');
    console.log(this.empId);
    console.log(this.meet);
    this.service.updateMeeting(this.empId, this.meet).subscribe(
      data => console.log(data)
    );
  }

}
