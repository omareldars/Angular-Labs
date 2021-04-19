import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string;
  age:string;
  @Output() myEvent = new EventEmitter();
  Add()
  {
    let x = [this.name,this.age];
    this.myEvent.emit(x);
    this.name="";
    this.age="";
  }
}
