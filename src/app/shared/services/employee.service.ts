import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  catchError, map, Observable, throwError } from 'rxjs';
import { Employee } from '../models/employee.model';
import { ApiAuthHeadersService } from '../services/api-auth-headers.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   // Node/Express API
   REST_API: string = 'http://localhost:8000/api';
   // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private httpClient: HttpClient, private apiAuthHeadersService: ApiAuthHeadersService,) { }

  // Add New Employee
  AddEmployee(data : Employee): Observable<any>{
    const headers = this.apiAuthHeadersService.getAuthHeaders()
    let API_URL = `${this.REST_API}/add-employee`;
    return this.httpClient.post(API_URL, data).
    pipe(catchError(this.handleError));
  }
  // Get all Employees
  GetAllEmployees(): Observable<any>{
    const headers = this.apiAuthHeadersService.getAuthHeaders()
    return this.httpClient.get(`${this.REST_API}`, {headers: headers});
  }
// Get single employee
GetEmployee(id: any): Observable<any>{
  const headers = this.apiAuthHeadersService.getAuthHeaders()
  let API_URL = `${this.REST_API}/read-employee/${id}`;
  return this.httpClient.get(API_URL, { headers: headers }).pipe(
    map((res: any) => {
      return res || {};
    }),
    catchError(this.handleError)
);
}
// Update Employee
updateEmployee(id: any, data: any): Observable<any> {
  let API_URL = `${this.REST_API}/update-employee/${id}`;
  return this.httpClient
    .put(API_URL, data, { headers: this.httpHeaders })
    .pipe(catchError(this.handleError));
}
// Delete Employee record
deleteEmployee(id: any): Observable<any> {
  let API_URL = `${this.REST_API}/delete-employee/${id}`;
  return this.httpClient
    .delete(API_URL, { headers: this.httpHeaders })
    .pipe(catchError(this.handleError));

  }
  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}
