import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  counter:number=0;
  img:string = "assets/Images/1.JPG";
  id:any;
  ArrayOfImages:string[]=[
    "assets/Images/1.JPG",
    "assets/Images/2.JPG",
    "assets/Images/3.JPG",
    "assets/Images/4.JPG",
    "assets/Images/5.JPG",
    "assets/Images/6.JPG",
    "assets/Images/7.JPG",
    "assets/Images/8.JPG",
    "assets/Images/9.JPG",
    "assets/Images/10.JPG",
    "assets/Images/11.JPG",
    "assets/Images/12.JPG",
  ];

next()
{
  if(this.counter < this.ArrayOfImages.length-1)
  {
    this.counter++;
    this.img = this.ArrayOfImages[this.counter]
  }
}

prev()
{
  if(this.counter > 0 && this.counter < this.ArrayOfImages.length)
  {
    this.counter--;
    this.img = this.ArrayOfImages[this.counter]
  }
}

start()
{
  this.id = setInterval(() =>{
    this.counter++;
    if(this.counter >= this.ArrayOfImages.length)
    {
      this.counter = 0;
    }
    this.img=this.ArrayOfImages[this.counter];
  },1000);
}


stop()
{
  clearInterval(this.id);
}
}
