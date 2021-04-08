import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {User}from '../user';
import {UserService} from '../githubsearch/user.service';
import {UseralertService} from '../alertservice/useralert.service';
import {UserResults} from '../results-class/user-results';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {     addNewUser(user:any){
  this.users.push (user)
}

  apiKey=environment.apiKey
  users!: User;
  
  useralertService!:UseralertService;
  userResults!: UserResults;

  constructor(userService:UserService, useralertService:UseralertService, private http:HttpClient) { 
    this.users=userService.getUsers()
    this.useralertService=useralertService;
  }



  
  ngOnInit() {

    interface ApiResponse{
      name: string,
      url: string,
      public_repos: string,
    }

    this.http.get<ApiResponse>(`https://api.github.com/users/${User}?access_token=${this.apiKey}`).subscribe(data=>{
    this.userResults= new UserResults(data.name, data.url, data.public_repos)
    },err=> {
      this.userResults = new UserResults("An Error Occured !!","An Error Occured !!", "An Error Occured !!")
        console.log("An Error Occurred")
    })
  }

}
