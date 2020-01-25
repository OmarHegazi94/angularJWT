import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ErrorComponent } from './error/error.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard] },
  { path: 'employees', component: EmployeesComponent, canActivate: [AuthguardGuard] },
  { path: 'departments', component: DepartmentsComponent, canActivate: [AuthguardGuard] },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
