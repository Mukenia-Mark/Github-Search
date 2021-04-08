import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {


  apiKey=environment.apiKey
  users!:User;

  constructor(private http:HttpClient) {
    this.users=new User("");
   }

   userRequest(){
     interface ApiResponse{
       name:string;
     }
     let promise=new Promise ((resolve,reject)=>{
       this.http.get<ApiResponse>(`https://api.github.com/users/${User}?access_token=${this.apiKey}`).toPromise().then(response=>{
         this.users.name=response.name

         resolve("")
       },
       error=>{
         this.users.name="User cannot be found !!"

         reject(error)
       })
     }) 
     return promise
   }
}
