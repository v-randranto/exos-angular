import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExerciceA0Component } from './exercices/1-expressions/exercice-a0/exercice-a0.component';
import { ExerciceA1Component } from './exercices/1-expressions/exercice-a1/exercice-a1.component';
import { ExerciceA2Component } from './exercices/1-expressions/exercice-a2/exercice-a2.component';
import { ExerciceA3Component } from './exercices/1-expressions/exercice-a3/exercice-a3.component';
import { ExerciceA4Component } from './exercices/1-expressions/exercice-a4/exercice-a4.component';
import { ExerciceA5Component } from './exercices/1-expressions/exercice-a5/exercice-a5.component';
import { ExerciceA6Component } from './exercices/1-expressions/exercice-a6/exercice-a6.component';
import { ExerciceB1Component } from './exercices/2-proprietes-evenements/exercice-b1/exercice-b1.component';
import { ExerciceB2Component } from './exercices/2-proprietes-evenements/exercice-b2/exercice-b2.component';
import { ExerciceB3Component } from './exercices/2-proprietes-evenements/exercice-b3/exercice-b3.component';
import { ExerciceB4Component } from './exercices/2-proprietes-evenements/exercice-b4/exercice-b4.component';
import { ExerciceB5Component } from './exercices/2-proprietes-evenements/exercice-b5/exercice-b5.component';
import { ExerciceB6Component } from './exercices/2-proprietes-evenements/exercice-b6/exercice-b6.component';
import { ExerciceC1Component } from './exercices/3-formulaires/exercice-c1/exercice-c1.component';
import { ExerciceC2Component } from './exercices/3-formulaires/exercice-c2/exercice-c2.component';
import { ExerciceD1Component } from './exercices/4-services/exercice-d1/exercice-d1.component';
import { TodoComponent } from './exercices/4-services/todo/todo.component';
import { TodoListComponent } from './exercices/4-services/todo-list/todo-list.component';
import { TodoFormComponent } from './exercices/4-services/todo-form/todo-form.component';
import { ExerciceE1Component } from './exercices/5-routage/exercice-e1/exercice-e1.component';
import { ExerciceF1Component } from './exercices/6-modules/exercice-f1/exercice-f1.component';

const routes: Routes = [
  {path: 'expressions/exo-a0', component: ExerciceA0Component, data: { title: 'Expressions' }},
  {path: 'expressions/exo-a1', component: ExerciceA1Component,data: { title: 'Expressions' }},
  {path: 'expressions/exo-a2', component: ExerciceA2Component,data: { title: 'Expressions' }},
  {path: 'expressions/exo-a3', component: ExerciceA3Component,data: { title: 'Expressions' }},
  {path: 'expressions/exo-a4', component: ExerciceA4Component,data: { title: 'Expressions' }},
  {path: 'expressions/exo-a5', component: ExerciceA5Component,data: { title: 'Expressions' }},
  {path: 'expressions/exo-a6', component: ExerciceA6Component,data: { title: 'Expressions' }},
  {path: 'proprietes-evenements/exo-b1', component: ExerciceB1Component,data: { title: 'Proprietes et événements' }},
  {path: 'proprietes-evenements/exo-b2', component: ExerciceB2Component,data: { title: 'Proprietes et événements' }},
  {path: 'proprietes-evenements/exo-b3', component: ExerciceB3Component,data: { title: 'Proprietes et événements' }},
  {path: 'proprietes-evenements/exo-b4', component: ExerciceB4Component,data: { title: 'Proprietes et événements' }},
  {path: 'proprietes-evenements/exo-b5', component: ExerciceB5Component,data: { title: 'Proprietes et événements' }},
  {path: 'proprietes-evenements/exo-b1', component: ExerciceB1Component,data: { title: 'Proprietes et événements' }},
  {path: 'proprietes-evenements/exo-b6', component: ExerciceB6Component,data: { title: 'Proprietes et événements' }},
  {path: 'formulaires/exo-c1', component: ExerciceC1Component,data: { title: 'Formulaires' }},
  {path: 'formulaires/exo-c2', component: ExerciceC2Component,data: { title: 'Formulaires' }},
  {path: 'services/exo-d1', component: ExerciceD1Component,data: { title: 'Services' }},
  {path: 'services/todo', component: TodoComponent,data: { title: 'Tâches' }},
  {path: 'services/todo-list', component: TodoListComponent,data: { title: 'Tâches' }},
  {path: 'services/todo-form', component: TodoFormComponent,data: { title: 'Tâches' }},
  {path: 'routage/exo-e1', component: ExerciceE1Component,data: { title: 'Routage' }},
  {path: 'modules/exo-f1', component: ExerciceF1Component,data: { title: 'Modules' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
