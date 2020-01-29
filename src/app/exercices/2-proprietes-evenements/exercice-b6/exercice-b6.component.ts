import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b6',
  templateUrl: './exercice-b6.component.html',
  styleUrls: ['./exercice-b6.component.css']
})
export class ExerciceB6Component implements OnInit {
  x:number = 0;
  y:number = 0;
  saisie:string = "";
  transcode(e):void {
   this.saisie = e.keyCode ;
  };
  suivre(x:number, y:number){
    this.x = x;
    this.y = y;
  }

  constructor() { }

  ngOnInit() {
  }

}
