import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './features/components/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './features/components/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './features/components/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employee-list' },
{ path: 'employee-list', component: EmployeeListComponent },
{ path: 'add-employee', component: AddEmployeeComponent },
{ path: 'edit-employee/:id', component: EmployeeDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
