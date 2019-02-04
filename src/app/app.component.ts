import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` 
  <router-outlet></router-outlet>
  `
 // templateUrl: './app.component.html'
})
export class AppComponent {
title: string;
 constructor(){
  this.title = 'Angular Cor Concepts';
 }

}
