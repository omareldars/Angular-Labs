import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab3';
  dd;
  students:{name:string, age:number}[] = [];
  RecieveData(data)
  {
    this.dd=data;
    console.log(this.dd);
    console.log(typeof(this.dd))

    let student:{name:string, age:number} = {name:this.dd[0],age:this.dd[1]};
    this.students.push(student);
  }
}
