import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ourValidation = new FormGroup({
    name: new FormControl("Enter Name",Validators.required),
    age: new FormControl(20,[Validators.min(18), Validators.max(60), Validators.required])
  });

  
  get Name(){
    return this.ourValidation.controls.name.valid;
  }
  get Age(){
    return this.ourValidation.controls.age.valid;
  }
  sub(){
    if(this.Age && this.Name){
      console.log(this.ourValidation.controls.name.value);
      console.log(this.ourValidation.controls.age.value);
      
    }
  }

}
