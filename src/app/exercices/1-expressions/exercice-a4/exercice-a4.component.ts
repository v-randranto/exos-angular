import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-a4',
  templateUrl: './exercice-a4.component.html',
  styleUrls: ['./exercice-a4.component.css']
})
export class ExerciceA4Component implements OnInit {
  titreH2:string = 'Exercice a4'
  nom: string = 'valeur component';

  constructor() { }

  ngOnInit() {
  }

}
