import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ICustomer } from '../shared/interfaces';

// Decorators are functins.
@Component({
 selector: 'app-customers',
 templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
 title: string;
 people: any[];

 constructor(private dataService: DataService) {
  this.title = 'Customers';
 }

 ngOnInit() {
  this.title = 'Customers';
  this.dataService.getCustomers()
   .subscribe((customers: ICustomer[]) => this.people = customers);

  // this.people = [
  //  {id: 1, name: 'jone Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10)},
  //  {id: 2, name: 'Jone Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 10)},
  //  {id: 3, name: 'Michelle T', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
  //  {id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)}
  // ];

 }

}
