import { Component, OnInit } from '@angular/core';

interface IEleve {
  nom: string;
  prenom: string;
  age: number
}

interface IClasse {
  nom: string;
  specialite: string;
  eleves: IEleve[]
}

@Component({
  selector: 'app-exercice-a3',
  templateUrl: './exercice-a3.component.html',
  styleUrls: ['./exercice-a3.component.css']
})

export class ExerciceA3Component implements OnInit {

  classe: IClasse = {
    nom: "DIWJS-11",
    specialite: "JavaScipt",
    eleves: [
      {nom: 'Rand', prenom: 'Vero', age: 55},
      {nom: 'Alinc', prenom: 'Chrys', age: 33},
      {nom: 'Hombre', prenom: 'Seb', age: 33}
    ]
  }
  

  constructor() { }

  ngOnInit() {
  }

}
