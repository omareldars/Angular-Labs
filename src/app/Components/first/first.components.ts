import { Component } from "@angular/core";

@Component({
    selector:"app-first",
    templateUrl:"./first.components.html",
    styleUrls:["./first.components.css"],
})
export class FirstComponent{
    name:string="";
    default(){
        this.name = "Hi From Default";
    }
    Change(data){
        this.name = data.target.value;
    }

}