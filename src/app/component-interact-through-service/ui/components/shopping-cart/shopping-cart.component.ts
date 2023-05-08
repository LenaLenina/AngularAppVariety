import { Component } from '@angular/core';
import { IShoppingCartService } from 'src/app/component-interact-through-service/application-core/services.abstractions/i-shopping-cart-service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  constructor(private _shoppingCartService: IShoppingCartService) { }

  get isBuy(): boolean {
    return this._shoppingCartService.isBuy();
  }

  cancel():void {
    this._shoppingCartService.cancel();
  }
}
