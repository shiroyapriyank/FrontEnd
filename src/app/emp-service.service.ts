import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Task } from './task';
import { Training } from './training';
import { Meeting } from './meeting';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  private baseUrl = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/listEmployee`);
  }

  getTaskList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/listTask`);
  }

  getTrainingRoom(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/listTrainingRoom`);
  }

  getMeetingRoom(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/listMeetingRoom`);
  }

  // tslint:disable-next-line:ban-types
  createEmployee(empCreate: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}` + `/addemployee`, empCreate);
  }

  // tslint:disable-next-line:ban-types
  updateEmployee(id: any, emp: Employee): Observable<Object> {
    alert(id);
    console.log(emp);
    return this.httpClient.put(`${this.baseUrl}` + `/updateEmployee/${id}`, emp);
  }

  // tslint:disable-next-line:ban-types
  getEmployeeById(employeeId: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}` + `/getById/` + `${employeeId}`);
  }

  // tslint:disable-next-line:ban-types
  assignTask(task: Task): Observable<Object> {
    console.log(task);
    return this.httpClient.post(`${this.baseUrl}` + `/assignTask` , task);
  }

  // tslint:disable-next-line:ban-types
  addTrainingRoom(train: Training): Observable<Object> {
    console.log(train);
    return this.httpClient.post(`${this.baseUrl}` + `/addTrainingRoom` , train);
  }

  // tslint:disable-next-line:ban-types
  addMeetingRoom(meet: Meeting): Observable<Object> {
    console.log(meet);
    return this.httpClient.post(`${this.baseUrl}` + `/addMeetingRoom` , meet);
  }

}
