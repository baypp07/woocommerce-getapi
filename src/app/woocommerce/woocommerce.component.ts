import { Component } from '@angular/core';
import{WoocommerceService} from './woocommerce.service';

@Component({
  selector: 'woocommerce',
  templateUrl: './woocommerce.component.html'
})
export class WoocommerceComponent {
  constructor(private woocommerceService: WoocommerceService){}
  ngOnInit() {
    this.getListOfProducts();
  }

  getListOfProducts(): void {
    this.woocommerceService.getListOfProducts()
      .subscribe(items => console.log('slkjlkj',items));
  }
}