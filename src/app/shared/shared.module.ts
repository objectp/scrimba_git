import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize-pipe';

@NgModule({
 declarations: [ CapitalizePipe ],
 exports: [ CapitalizePipe ] // so other modules can import it 
})
export class SharedModule {}
