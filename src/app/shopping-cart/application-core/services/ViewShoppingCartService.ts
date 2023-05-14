import { IViewShoppingCartService } from "../services.abstractions/IViewShoppingCartService";
import { Injectable } from "@angular/core";
import { IShoppingCartState } from "../domain/states/IShoppingCartState";


@Injectable()
export class ViewShoppingCartService implements IViewShoppingCartService {

    private _isBuy: boolean = false;

    isBuy$ = this._shoppingCartState.isBuy$;

    constructor(private _shoppingCartState: IShoppingCartState) {
        // setInterval(() => {
        //     this._isBuy = !this._isBuy;
        //     this.isBuy$.next(this._isBuy);
        //   }, 0.001);
    }

    public buy(): void {
        // this._isBuy = true;
        this.isBuy$.next(true);
    }
    
    public cancel(): void {
        // this._isBuy = false;
        this.isBuy$.next(false);
    }

    // public isBuy(): boolean {
    //     // return this._isBuy;
    //     return this._isBuy;
    // }

}
