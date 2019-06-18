import { Component, OnInit } from '@angular/core';
import {User} from './User';
import {Users} from './mockUserData';

@Component({
  selector: 'app-for-loop-test',
  templateUrl: './for-loop-test.component.html',
  styleUrls: ['./for-loop-test.component.css']
})
export class ForLoopTestComponent implements OnInit {

  //array of users from mockUserData
  users = Users;
  //a user type
  selectedUser: User; 

  constructor() { }

  ngOnInit() {
    this.users.forEach( x => {
      console.log(x.id)
      console.log(x.name)
    })
  }

  onSelect(user: User){
this.selectedUser = user;
console.log(user)
  }
}
