import { Injectable } from "@angular/core";
import { IProductBuyService } from "../services.abstractions/IProductBuyService";
import { IShoppingCartController } from "../../Presentation/controllers.abstractions/IShoppingCartController";

@Injectable()
export class ShoppingCartProdcutBuyService implements IProductBuyService{

    constructor(private _shoppingCartController: IShoppingCartController) { }
    
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
