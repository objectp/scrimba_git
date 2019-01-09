// core folder is recomended for your singleton object and it going to have two services one is going to be called data service, it is going to be responsible for http call or ajax call you maight say to the server and the other is going to be called sorter service, it is going to sort our data 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

 baseUrl: string = 'assets/';

 getCustomers(): Observable<ICustomer[]> {
  return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
  .pipe(
   catchError(this.handleError)
  );
 }
 constructor() { }




 private handleError(error: any) {
  console.error('server error:', error);
  if (error.error instanceof Error) {
   const errMessage = error.error.message;
   return Observable.throw(errMessage);
   // Use the following instead if using lite-server
   // return Observable.throw(err.text() || 'backend server error');
  }
  return Observable.throw(error || 'Node.js server error');
 }

}
