import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private employeeService:EmployeeService) { 
       this.getId = this.activatedRoute.snapshot.paramMap.get('id');
       this.employeeService.GetEmployee(this.getId).subscribe(res => {
        this.updateForm.setValue({
          name: res['name'],
          surname: res['surname'],
          age: res['age'],
          nationality: res['nationality'],
          address: res['address']
        });
      });
      this.updateForm = this.formBuilder.group({
        name: [''],
        surname: [''],
        age: [''],
        nationality: [''],
        address: [''],
      })
      }

  ngOnInit(): void {
  }
  onUpdate(): any {
    this.employeeService.updateEmployee(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/employee-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
