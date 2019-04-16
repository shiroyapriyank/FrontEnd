import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
    ListTrainingRoomComponent
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
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
