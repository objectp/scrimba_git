import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
 selector: 'filter-textbox',
 template: `
        Filter: <input type="text" [(ngModel)]="filter" /> 
    ` // filter assingnd here and set method filter are the same 
})

export class FilterTextboxComponent implements OnInit{
 private _filter: string;

 @Input() get filter(){
  return this._filter;
 }
 // As the user types in the input box the set method will called that update the filter variable and emit the changed output property and pass the value as a string upto the parent
 set filter( val: string){
  this._filter = val;
  this.changed.emit(this.filter); // changed reprsents the output property of changed
 }

 @Output() changed: EventEmitter<string> = new EventEmitter<string>();
 constructor(){}

 ngOnInit(){
 }
}
