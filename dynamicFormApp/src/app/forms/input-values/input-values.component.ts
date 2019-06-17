import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-values',
  templateUrl: './input-values.component.html',
  styleUrls: ['./input-values.component.css']
})
export class InputValuesComponent implements OnInit {
values = ''
  constructor() { }

  ngOnInit() {
  }

  //getting input values from input boxes
  onKey(event: KeyboardEvent) { // with type info
    this.values = (<HTMLInputElement>event.target).value;
    let usernameInput = (<HTMLInputElement>document.getElementById("username")).value;
    let emailInput = (<HTMLInputElement>document.getElementById("email")).value;
    if(this.values == usernameInput){
    console.log("username: " + this.values);
    }
    if(this.values == emailInput){
      console.log("email: " + this.values)
    }
  }
}
