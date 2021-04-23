import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myclient:HttpClient) { }


  BaseUrl = "http://localhost:3000/users";

  getAllUsers()
  {
    return this.myclient.get(this.BaseUrl);
  }

  getUserById(id)
  {
    return this.myclient.get(this.BaseUrl+"/"+id);
  }

  AddNewUser(user)
  {
    return this.myclient.post(this.BaseUrl,user);
  }

  DeleteUserById(id)
  {
    return this.myclient.delete(this.BaseUrl+"/"+id);
  }
}
