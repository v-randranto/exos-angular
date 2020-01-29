import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b3',
  templateUrl: './exercice-b3.component.html',
  styleUrls: ['./exercice-b3.component.css']
})
export class ExerciceB3Component implements OnInit {

  numActif:number = 0;
  activer(n:number):void {
    this.numActif = n;
  } 
  estActif(n:number):boolean{
    if (this.numActif == n) {
      return true;
    } else {
      return false;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
