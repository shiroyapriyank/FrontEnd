import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { MaterialModule } from 'material.module';
import {
  MatInputModule,
  MatSelectModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BulkAttendanceComponent } from './bulk-attendance/bulk-attendance.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmpSidebarComponent } from './emp-sidebar/emp-sidebar.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddMeetingRoomComponent } from './add-meeting-room/add-meeting-room.component';
import { AddTrainingRoomComponent } from './add-training-room/add-training-room.component';
import { ListMeetingRoomComponent } from './list-meeting-room/list-meeting-room.component';
import { ListTrainingRoomComponent } from './list-training-room/list-training-room.component';
import { EmpTaskComponent } from './emp-task/emp-task.component';
import { RequestMeetingRoomComponent } from './request-meeting-room/request-meeting-room.component';
import { RequestTrainingRoomComponent } from './request-training-room/request-training-room.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { ListLeaveRequestComponent } from './list-leave-request/list-leave-request.component';
import { ViewAttendanceComponent } from './view-attendance/view-attendance.component';
import { EmpAttendanceComponent } from './emp-attendance/emp-attendance.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AdminHomeComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    AssignTaskComponent,
    SidebarComponent,
    BulkAttendanceComponent,
    EditEmployeeComponent,
    EmployeeHomeComponent,
    EmpSidebarComponent,
    ViewTaskComponent,
    AddMeetingRoomComponent,
    AddTrainingRoomComponent,
    ListMeetingRoomComponent,
    ListTrainingRoomComponent,
    EmpTaskComponent,
    RequestMeetingRoomComponent,
    RequestTrainingRoomComponent,
    LeaveRequestComponent,
    NoticeBoardComponent,
    ListLeaveRequestComponent,
    ViewAttendanceComponent,
    EmpAttendanceComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
  MatPaginatorModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
  ],
  providers: [HttpClientModule, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
