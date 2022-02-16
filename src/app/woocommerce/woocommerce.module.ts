import { NgModule }         from '@angular/core';
import {WoocommerceComponent} from './woocommerce.component';
import{WoocommerceService} from './woocommerce.service';
@NgModule({
  imports: [],
  declarations: [
    WoocommerceComponent
  ],
  exports:[
    WoocommerceComponent
  ],
  providers: [
    WoocommerceService
  ]
})
export class WoocommerceModule {}