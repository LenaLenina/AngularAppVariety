import { Component } from '@angular/core';
import { IProductBuyService } from 'src/app/product-buy/application-core/services.abstractions/IProductBuyService';

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
