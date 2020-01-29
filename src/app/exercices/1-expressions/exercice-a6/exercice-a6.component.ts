import { Component, OnInit } from '@angular/core';

interface IBagnole {
  modele: string;
  puissance: string;
  prix: number;
  date: Date
}

@Component({
  selector: 'app-exercice-a6',
  templateUrl: './exercice-a6.component.html',
  styleUrls: ['./exercice-a6.component.css']
})
export class ExerciceA6Component implements OnInit {

  bagnoles: IBagnole[] = [
    {
      modele: 'super deudeuche',
      puissance: '2000 dadas',
      prix: 10000,
      date: new Date('December 17, 1965')
    },
    {
      modele: 'twingo de la mort',
      puissance: '5000 dadas',
      prix: 20000,
      date: new Date('December 17, 2000')
    },
    {
      modele: 'mega benz',
      puissance: '10000 dadas',
      prix: 200000,
      date: new Date('December 17, 2015')
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
