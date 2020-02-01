import { TodoService } from './../fonctions/todo/todo.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExerciceA0Component } from './1-expressions/exercice-a0/exercice-a0.component';
import { ExerciceA1Component } from './1-expressions/exercice-a1/exercice-a1.component';
import { ExerciceA2Component } from './1-expressions/exercice-a2/exercice-a2.component';
import { ExerciceA3Component } from './1-expressions/exercice-a3/exercice-a3.component';
import { ExerciceA4Component } from './1-expressions/exercice-a4/exercice-a4.component';
import { ExerciceA5Component } from './1-expressions/exercice-a5/exercice-a5.component';
import { ExerciceA6Component } from './1-expressions/exercice-a6/exercice-a6.component';
import { ExerciceB1Component } from './2-proprietes-evenements/exercice-b1/exercice-b1.component';
import { ExerciceB2Component } from './2-proprietes-evenements/exercice-b2/exercice-b2.component';
import { ExerciceB3Component } from './2-proprietes-evenements/exercice-b3/exercice-b3.component';
import { ExerciceB4Component } from './2-proprietes-evenements/exercice-b4/exercice-b4.component';
import { ExerciceB5Component } from './2-proprietes-evenements/exercice-b5/exercice-b5.component';
import { ExerciceB6Component } from './2-proprietes-evenements/exercice-b6/exercice-b6.component';
import { ExerciceC1Component } from './3-formulaires/exercice-c1/exercice-c1.component';
import { ExerciceC2Component } from './3-formulaires/exercice-c2/exercice-c2.component';
import { TodoComponent } from './4-services/todo/todo.component';
import { TodoListComponent } from './4-services/todo-list/todo-list.component';
import { TodoFormComponent } from './4-services/todo-form/todo-form.component';
import { ExerciceD1Component } from './4-services/exercice-d1/exercice-d1.component';
import { ExerciceE1Component } from './5-routage/exercice-e1/exercice-e1.component';
import { ExerciceF1Component } from './6-modules/exercice-f1/exercice-f1.component';


@NgModule({
  declarations: [
    ExerciceA0Component,
    ExerciceA1Component,
    ExerciceA2Component,
    ExerciceA3Component,
    ExerciceA4Component,
    ExerciceA5Component,
    ExerciceA6Component,
    ExerciceB1Component,
    ExerciceB2Component,
    ExerciceB3Component,
    ExerciceB4Component,
    ExerciceB5Component,
    ExerciceB6Component,
    ExerciceC1Component,
    ExerciceC2Component,
    ExerciceD1Component,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    ExerciceE1Component,
    ExerciceF1Component,
   
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ExerciceA0Component,
    ExerciceA1Component,
    ExerciceA2Component,
    ExerciceA3Component,
    ExerciceA4Component,
    ExerciceA5Component,
    ExerciceA6Component,
    ExerciceB1Component,
    ExerciceB2Component,
    ExerciceB3Component,
    ExerciceB4Component,
    ExerciceB5Component,
    ExerciceB6Component,
    ExerciceC1Component,
    ExerciceC2Component,
    ExerciceD1Component,
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    ExerciceE1Component,
    ExerciceF1Component,
  ],
  providers: [TodoService],
})
export class ExercicesModule { }
