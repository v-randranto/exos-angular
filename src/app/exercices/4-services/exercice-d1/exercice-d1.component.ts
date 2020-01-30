import { CompteurService } from './../../../fonctions/compteur/compteur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-d1',
  templateUrl: './exercice-d1.component.html',
  styleUrls: ['./exercice-d1.component.css']
})
export class ExerciceD1Component implements OnInit {

  compteur:number = 0;
  incrementer(){}

  constructor(private compteurService:CompteurService) { 
    this.compteur = this.compteurService.getCompteur();
    this.incrementer = this.compteurService.incrementer;
  }

  ngOnInit() {
  }

}
