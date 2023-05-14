import { Injectable } from '@angular/core';
import { IShoppingCartController } from '../../../shopping-cart/presentation/controllers.abstract/IShoppingCartController';
import { IShoppingCartService } from '../../application-core/services.abstractions/IShoppingCartService';
import { IViewShoppingCartService } from "../../../shopping-cart/application-core/services.abstractions/IViewShoppingCartService";
import { IRepositoryShoppingCartService } from '../../application-core/services.abstractions/IRepositoryShoppingCartService';
import { Observable } from 'rxjs';
import { IShoppingCartState } from '../../application-core/domain/states/IShoppingCartState';


@Injectable()
export class ShoppingCartController2 implements IShoppingCartController {

  private _shoppingCartServices: IShoppingCartService[];

  constructor(private _view: IViewShoppingCartService, 
              private _repository: IRepositoryShoppingCartService,
              private _shoppingCartState: IShoppingCartState) 
  {
    this._shoppingCartServices = [_view, _repository];
  }

  public getIsBuyObservable(): Observable<boolean> {
    return this._shoppingCartState.isBuy$.asObservable();
  }

  public isBuy(): boolean {
    if(this._repository.isBuy() == false) 
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
