// BrowserModule provides derectives.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';

//  NgModule is a decorator provides metha data for the module
@NgModule({
 declarations: [
  AppComponent
  // ,CustomersListComponent
 ],
 imports: [
  BrowserModule, 
  CoreModule,
  CustomersModule,
  SharedModule
 ],
 providers: [],
 bootstrap: [AppComponent] // The 1st component that is going to be loaded.
})
export class AppModule { } // This is the module.
