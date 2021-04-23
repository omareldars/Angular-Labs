import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:'',redirectTo:"users",pathMatch:"full"},
  {path:'users', component:UsersComponent},
  {path:'users/:id', component:UserDetailsComponent},
  {path:'newuser', component:NewUserComponent},
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
