import { Component } from '@angular/core';
import { IProductBuyService } from 'src/app/component-interact-through-service/application-core/services.abstractions/i-poduct-buy-service';

@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.scss']
})
export class ProductBuyComponent {
  constructor(private _productBuyService: IProductBuyService) { }

  get isBuy(): boolean {
    return this._productBuyService.isBuy();
  }

  buy() {
    this._productBuyService.buy();
  }

  cancel(){
    this._productBuyService.cancel();
  }
}
