import { Injectable } from '@angular/core';
import { IShoppingCartController } from '../controllers.abstractions/IShoppingCartController';
import { IShoppingCartService } from '../../application-core/services.abstractions/IShoppingCartService';
import { IViewShoppingCartService } from "../../application-core/services.abstractions/IViewShoppingCartService";
import { IRepositoryShoppingCartService } from '../../application-core/services.abstractions/IRepositoryShoppingCartService';


@Injectable()
export class ShoppingCartController2 implements IShoppingCartController {

  private _shoppingCartServices: IShoppingCartService[];

  constructor(view: IViewShoppingCartService, private _repository: IRepositoryShoppingCartService) {
    this._shoppingCartServices = [view, _repository];
  }

  public isBuy(): boolean {
    return this._repository.isBuy();
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
