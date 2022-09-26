import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './features/components/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './features/components/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './features/components/employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import 'hammerjs';
import { EmployeeModule } from './features/employee.module';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { HeaderComponent } from './navigation/header/header.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployeeModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
