import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
}) 
export class TodoComponent implements OnInit {
  titreH2:string = 'Todo app';
  constructor() { }

  ngOnInit() {
  }

}
