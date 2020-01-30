import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private tasks: string[] = ['Truc à faire', 'Voir Machin'];
  private toto: string = 'salut'
  getTasks() {
    console.log(this.tasks);
    console.log(this.toto);
    return this.tasks;
  };
  addTask(t: string) {
    console.log('add task...');
    console.log(this.toto);
    console.log(this.tasks);
    this.tasks.push('descendre la poubelle !');
  };

  constructor() { }
}
