import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-c1',
  templateUrl: './exercice-c1.component.html',
  styleUrls: ['./exercice-c1.component.css']
})
export class ExerciceC1Component implements OnInit {
  titreH2:string = 'Exercice c1'
  adresseDeLImage:string = '';
  saisieUtilisateur:string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
