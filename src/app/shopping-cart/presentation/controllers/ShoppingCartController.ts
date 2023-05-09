import { Injectable } from '@angular/core';

import { IShoppingCartController } from '../../../shopping-cart/presentation/controllers.abstract/IShoppingCartController';
import { IShoppingCartService } from '../../application-core/services.abstractions/IShoppingCartService';
import { IViewShoppingCartService } from "../../../shopping-cart/application-core/services.abstractions/IViewShoppingCartService";
import { IRepositoryShoppingCartService } from '../../application-core/services.abstractions/IRepositoryShoppingCartService';

@Injectable()
export class ShoppingCartController implements IShoppingCartController {

  private _shoppingCartServices: IShoppingCartService[];

  constructor(view: IViewShoppingCartService, repository: IRepositoryShoppingCartService) {
    this._shoppingCartServices = [view, repository];
  }

  public isBuy(): boolean {
    for (const service of this._shoppingCartServices) 
      if (service.isBuy() == false)
        return false;

    return true;
  }

  public buy(): void {
    for (const service of this._shoppingCartServices) 
      service.buy();
  }

  public cancel(): void {
    for (const service of this._shoppingCartServices) 
      service.cancel();
  }

}
