import { NgModule } from '@angular/core'; // For decorators 
import { RouterModule, Routes } from '@angular/router';// Routes is an interface

const routes: Routes = [ 
 {path: '', pathMatch: 'full', redirectTo: '/customers'}, 
 { path: '**', pathMatch: 'full', redirectTo: '/customers' } // ** means anything that didn't get match earlior. '
];

@NgModule({
 // forRoot() register routes)
 imports: [ RouterModule.forRoot(routes) ],
 exports: [ RouterModule ] // Makes available this module to any one of module who imports this module
})

export class AppRoutingModule {
}
