import { NgModule } from '@angular/core'; // For decorators 
import { RouterModule, Routes } from '@angular/router';// Routes is an interface
import { CustomersComponent } from './customers.component';

const routes: Routes = [ 
 {path: 'customers', component: CustomersComponent } 
];

@NgModule({
 // forRoot() register routes)
 imports: [ RouterModule.forChild(routes) ],
 exports: [ RouterModule ] // Makes available this module to any one of module who imports this module
})

export class CustomersRoutingModule {
}
