import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User}from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users!: User[]

  addNewUser(user:any){
    this.users.push(user)
  }

  constructor() { }

  
ngOnInit(): void {
  }

}
