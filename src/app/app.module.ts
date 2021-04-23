import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserItemComponent } from './Components/user-item/user-item.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { ErrorComponent } from './Components/error/error.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './Pipes/custom.pipe';
import { CustomDirective } from './Directives/custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UserItemComponent,
    NewUserComponent,
    ErrorComponent,
    CustomPipe,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
