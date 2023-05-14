import { Injectable } from "@angular/core";
import { IProductBuyService } from "../services.abstractions/IProductBuyService";
import { IShoppingCartController } from "../../../shopping-cart/presentation/controllers.abstract/IShoppingCartController";
import { Observable } from "rxjs";

@Injectable()
export class ShoppingCartProdcutBuyService implements IProductBuyService{

    constructor(private _shoppingCartController: IShoppingCartController) { }

    public getIsBuyObservable(): Observable<boolean> {
        return this._shoppingCartController.getIsBuyObservable();
    }
    
    public buy(): void {
        this._shoppingCartController.buy();
    }

    public cancel(): void {
        this._shoppingCartController.cancel();
    }

    public isBuy(): boolean {
        return this._shoppingCartController.isBuy();
    }
}
