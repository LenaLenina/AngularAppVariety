import { Injectable } from '@angular/core';
import { IShoppingCartService } from '../../application-core/services.abstractions/i-shopping-cart-service';
import { IShoppingCartController } from '../controllers.abstractions/ishopping-cart-controller';

@Injectable()
export class ShoppingCartController implements IShoppingCartController {

  constructor(private _shoppingCartService: IShoppingCartService){}

  public isBuy(): boolean {
    return this._shoppingCartService.isBuy();
  }

  public buy(): void {
    this._shoppingCartService.buy();
  }

  public cancel(): void {
    this._shoppingCartService.cancel();
  }

}
