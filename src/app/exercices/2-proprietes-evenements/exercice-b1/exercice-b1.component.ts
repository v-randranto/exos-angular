import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-b1',
  templateUrl: './exercice-b1.component.html',
  styleUrls: ['./exercice-b1.component.css']
})
export class ExerciceB1Component implements OnInit {

  chien:string = 'https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__480.jpg';
  chats:string[] = [
    'https://cdn.pixabay.com/photo/2016/11/14/19/20/kittens-1824367__480.jpg',
    'https://cdn.pixabay.com/photo/2018/07/13/10/20/cat-3535404__480.jpg',
    'https://cdn.pixabay.com/photo/2019/08/20/21/21/cat-4419763__480.jpg'
  ]
  constructor() { }

  ngOnInit() {
  }

}
