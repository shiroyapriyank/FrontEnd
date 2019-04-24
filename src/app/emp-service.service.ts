import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Task } from './task';
import { Training } from './training';
import { Meeting } from './meeting';
import { Leave } from './leave';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  private baseUrl = 'http://localhost:8080/index';
  constructor(private httpClient: HttpClient) { }


  getEmployeeList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/listEmployee`);
  }

  getTaskList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/listTask`);
  }

  getTrainingRoom(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/listTrainingRoom`);
  }

  getMeetingRoom(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/listMeetingRoom`);
  }

  getTrainingRoomwithStatus(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/listTrainingRoomwithStatusFlase`);
  }

  getMeetingRoomwithStatus(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/listMeetingRoomwithStatusFlase`);
  }

  getLeaveRequest(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/listLeave`);
  }

  // tslint:disable-next-line:ban-types
  createEmployee(empCreate: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + `/admin/addemployee`, empCreate);
  }

  getTaskById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/user/getTaskById/` + `${id}?access_token=`
    + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  // tslint:disable-next-line:ban-types
  updateEmployee(id: any, emp: Employee): Observable<Object> {
    alert(id);
    console.log(emp);
    return this.httpClient.put(`${this.baseUrl}` + `/admin/updateEmployee/${id}`, emp);
  }

  // tslint:disable-next-line:ban-types
  updateMeeting(id: any, meeting: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}` + `/user/updateMeeting/${id}?access_token=`
    + JSON.parse(window.sessionStorage.getItem('token')).access_token , meeting);
  }

  // tslint:disable-next-line:ban-types
  updateTrainin(id: any, training: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}` + `/user/updateTraining/${id}?access_token=`
    + JSON.parse(window.sessionStorage.getItem('token')).access_token , training);
  }

  updateLeaveRequest(id: number, status: boolean): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}` + `/admin/updateLeaveRequest/${id}/${status}`, null);
  }
  // tslint:disable-next-line:ban-types
  updateStatus(task: any): Observable<Object> {
    console.log(task);
    return this.httpClient.put(`${this.baseUrl}` + `/user/updateTask?access_token=`
    + JSON.parse(window.sessionStorage.getItem('token')).access_token , task);
  }

  // tslint:disable-next-line:ban-types
  getEmployeeById(employeeId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/getById/` + `${employeeId}`);
  }

  getAttendanceByDate(date: Date): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/getAttendanceByDate/` + `${date}`);
  }

  getAttendanceByDateAndId(date: Date, id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/admin/getAttendanceByDateAndId/` + `${date}/${id}`);
  }

  checkEmail(email: any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/user/checkEmail/` + `${email}?access_token=`
    + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  // tslint:disable-next-line:ban-types
  assignTask(task: Task): Observable<Object> {
    console.log(task);
    return this.httpClient.post(`${this.baseUrl}` + `/admin/assignTask` , task);
  }

   // tslint:disable-next-line:ban-types
   isPresent(date: Date, empID: any): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + `/admin/isPresent/` + `${date}`, empID);
  }

  addLeaveRequest(leave: Leave): Observable<object> {
    console.log(leave);
    return this.httpClient.post(`${this.baseUrl}` + `/user/leaveRequest?access_token=`
    + JSON.parse(window.sessionStorage.getItem('token')).access_token , leave);
  }

  // tslint:disable-next-line:ban-types
  addTrainingRoom(train: Training): Observable<Object> {
    console.log(train);
    return this.httpClient.post(`${this.baseUrl}` + `/admin/addTrainingRoom` , train);
  }

  // tslint:disable-next-line:ban-types
  addMeetingRoom(meet: Meeting): Observable<Object> {
    console.log(meet);
    return this.httpClient.post(`${this.baseUrl}` + `/admin/addMeetingRoom`, meet);
  }

}
