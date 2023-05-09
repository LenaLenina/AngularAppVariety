import { Injectable } from '@angular/core';
import { IShoppingCartController } from '../controllers.abstract/IShoppingCartController';
import { IShoppingCartService } from '../../application-core/services.abstractions/IShoppingCartService';
import { IRepositoryShoppingCartService } from '../../application-core/services.abstractions/IRepositoryShoppingCartService';


@Injectable()
export class ShoppingCartController3 implements IShoppingCartController {

  private _shoppingCartServices: IShoppingCartService[];

  constructor(private _repository: IRepositoryShoppingCartService) {
    this._shoppingCartServices = [_repository];
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
