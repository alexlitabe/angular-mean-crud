import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  Employees:any = [];
  dataSource = new MatTableDataSource <Employee>();

  displayedColumns = ['name', 'surname', 'age', 'nationality', 'address', 'update','delete'];
  constructor(private employeeService: EmployeeService ) { }

  ngOnInit(): void {
   this.getEmployees()
}
refreshDataSource() {
  this.getEmployees();
}
getEmployees(){
  this.employeeService.GetAllEmployees().subscribe(res => {
    console.log(res)
    this.Employees = res;
    this.dataSource = new MatTableDataSource(res);
  });
}
  delete(id:any) {
    console.log(id);
    if(window.confirm('Are you sure you want to delete this record')) {
      this.employeeService.deleteEmployee(id).subscribe((res) => {
        this.Employees.splice(id);
      })
    }
    this.refreshDataSource();
  }
}
