import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Repository } from '../repository';

@Component({
  selector: 'app-repository-form',
  templateUrl: './repository-form.component.html',
  styleUrls: ['./repository-form.component.css']
})
export class RepositoryFormComponent implements OnInit {

  newRepository= new Repository()
  @Output() addRepository=new EventEmitter<Repository>()

  submitRepository(){
this.addRepository.emit(this.newRepository)
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
