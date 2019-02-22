import { NgModule } from '@angular/core';
import { TheAddressComponent } from './the-address/the-address';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [TheAddressComponent],
	imports: [IonicPageModule.forChild(TheAddressComponent)],
	exports: [TheAddressComponent]
})
export class ComponentsModule {}
