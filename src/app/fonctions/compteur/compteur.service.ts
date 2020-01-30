import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  private compteur: number = 0;
  incrementer():void {
    this.compteur ++;
  };
  getCompteur():number {
    return this.compteur;
  }

  constructor() { }
}
