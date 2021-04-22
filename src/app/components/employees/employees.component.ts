import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name;
  age;
  students:{name:string, age:number}[] = []; // third way
  get AgeValid()
  {
     return !this.age;
  }

  Add()
  {
    let student:{name:string, age:number} = {name:this.name, age:this.age};
    if (this.age > 18)
        this.students.push(student);
    this.name="";
    this.age="";
    
      
  }
}
