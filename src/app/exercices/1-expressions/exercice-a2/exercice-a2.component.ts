import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

interface IClasse {
  nom: string;
  specialite: string;
  nbInscrits: number;
};  

@Component({
  selector: 'app-exercice-a2',
  templateUrl: './exercice-a2.component.html',
  styleUrls: ['./exercice-a2.component.css']
})                          

export class ExerciceA2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  promotions: number[] = [2016, 2017, 2018, 2019, 2020];

  classe: IClasse = {
    nom: 'DIWJS-11',
    specialite: 'JavaScript',
    nbInscrits: 16
  }

}
