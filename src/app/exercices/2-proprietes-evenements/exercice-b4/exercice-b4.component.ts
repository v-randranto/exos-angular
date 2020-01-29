import { Component, OnInit } from '@angular/core';

interface IStyle {
  width: string;
  height: string;
  'background-color': string;
}

@Component({
  selector: 'app-exercice-b4',
  templateUrl: './exercice-b4.component.html',
  styleUrls: ['./exercice-b4.component.css']
})
export class ExerciceB4Component implements OnInit {
 
  styles:IStyle[] = [
    { width: '50px', height: '50px', 'background-color': 'black' },
    { width: '50px', height: '50px', 'background-color': 'antiquewhite' },
    { width: '50px', height: '50px', 'background-color': 'darkred' }
  ]
  
  augLargeur(index:number):void {
    const largeur = parseFloat(this.styles[index].width);
    this.styles[index].width = largeur + 10 + 'px';
  }

  constructor() { }

  ngOnInit() {
  }

}
