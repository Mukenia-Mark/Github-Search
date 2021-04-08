import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UseralertService {

  alertMe(message:string){
    alert(message)
  }

  constructor() { }
}
