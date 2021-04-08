import { Injectable } from '@angular/core';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUsers(){
    return User
  }

  constructor() { }
}
