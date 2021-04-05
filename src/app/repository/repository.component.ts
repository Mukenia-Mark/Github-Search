import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Repository} from '../repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repositories!: Repository[]

  addNewRepository(repository:any){
    this.repositories.push(repository)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
