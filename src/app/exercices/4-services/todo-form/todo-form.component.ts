import { TodoService } from './../../../fonctions/todo/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  task: string = "";
  addTask(t:string) { };

  constructor(private todoService: TodoService) {
    this.addTask = this.todoService.addTask;
  }

  ngOnInit() {
  }

}
