import { TodoService } from './../../../fonctions/todo/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks:string[];

  constructor(private todoService: TodoService) {
    this.tasks = this.todoService.getTasks();
   }

  ngOnInit() {
  }

}
