import { createPipeType } from '@angular/compiler/src/render3/r3_pipe_compiler';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styles: [
  ]
})
export class NewUserComponent implements OnInit {

  id;
  name;
  phone;
  email;
  city;
  street;

  constructor(private myService:UsersService) { }

  ngOnInit(): void {
  }

  Add(){
    let address = {
      city:this.city,
      street:this.street
    };
    let user = {
      id:this.id,
      name:this.name,
      email:this.email,
      phone:this.phone,
      address:address
    };
    this.myService.AddNewUser(user).subscribe();
  }

}
