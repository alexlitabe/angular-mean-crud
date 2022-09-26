import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup; 

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private employeeService: EmployeeService ) 
    { 
      this.employeeForm = this.formBuilder.group({
        name: [''],
        surname: [''],
        age: [''],
        nationality: [''],
        address: ['']
      })
    }

  ngOnInit(): void {
  }
onSubmit(): any{
  this.employeeService.AddEmployee(this.employeeForm.value)
  .subscribe(() => {console.log('Data added successfully')
  this.ngZone.run(() => this.router.navigateByUrl('/employee-list'))
}, (err) =>{
  console.log(err)
});
}

}
