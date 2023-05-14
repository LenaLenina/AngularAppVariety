import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IViewShoppingCartService } from "src/app/shopping-cart/application-core/services.abstractions/IViewShoppingCartService";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {

  isBuy$ = this._shoppingCartService.isBuy$.asObservable();

  constructor(private _shoppingCartService: IViewShoppingCartService) { }

  cancel():void {
    this._shoppingCartService.cancel();
  }
}
