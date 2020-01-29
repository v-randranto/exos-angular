import { Component, OnInit } from '@angular/core';

interface IUtilisateur {
  nom: string;
  prenom: string;
  email: string;
  age: number;
}


@Component({
  selector: 'app-exercice-c2',
  templateUrl: './exercice-c2.component.html',
  styleUrls: ['./exercice-c2.component.css']
})
export class ExerciceC2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
