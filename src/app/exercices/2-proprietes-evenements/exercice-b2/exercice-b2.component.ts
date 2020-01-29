import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b2',
  templateUrl: './exercice-b2.component.html',
  styleUrls: ['./exercice-b2.component.css']
})
export class ExerciceB2Component implements OnInit {
  nombre:number = 0;
  plus:boolean = true;
  operationLabel = 'incrémentation';
  operation():void {
    if (this.nombre == 0) { 
      this.plus = true;      
      this.operationLabel = 'incrémentation';
    }
    if (this.nombre == 10) { 
      this.plus = false;      
      this.operationLabel = 'décrémentation';
    }
    if (this.plus) {
      this.nombre ++;
    };
    if (!this.plus) {
      this.nombre --;
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
