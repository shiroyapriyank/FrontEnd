import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { BulkAttendanceComponent } from './bulk-attendance/bulk-attendance.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { AddMeetingRoomComponent } from './add-meeting-room/add-meeting-room.component';
import { AddTrainingRoomComponent } from './add-training-room/add-training-room.component';
import { ListTrainingRoomComponent } from './list-training-room/list-training-room.component';
import { ListMeetingRoomComponent } from './list-meeting-room/list-meeting-room.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'home', component: AdminHomeComponent },
  { path: 'addEmployee' , component: AddEmployeeComponent},
  { path: 'list' , component: ListEmployeeComponent},
  { path: 'updateEmp' , component: EditEmployeeComponent},
  { path: 'task' , component: AssignTaskComponent},
  { path: 'bulk' , component: BulkAttendanceComponent},
  { path: 'taskList' , component: ViewTaskComponent},
  { path: 'meeting' , component: AddMeetingRoomComponent},
  { path: 'training' , component: AddTrainingRoomComponent},
  { path: 'trainingList' , component: ListTrainingRoomComponent},
  { path: 'meetingList' , component: ListMeetingRoomComponent},
  { path: 'empHome' , component: EmployeeHomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
