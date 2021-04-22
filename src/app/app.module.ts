import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';


const routes:Routes = [
  // {path:'', redirectTo:"employees", pathmatch}
  {path:'',component:EmployeesComponent}, //localhost:4200
  {path:'employees',component:EmployeesComponent}, //localhost:4200/employees
  {path:'employees/:id',component:EmployeeDetailsComponent}, //localhost:4200/employees/2
  {path:'about',component:AboutComponent}, //localhost:4200/about
  {path:'**',component:ErrorComponent}, //localhost:4200/error
]


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailsComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
