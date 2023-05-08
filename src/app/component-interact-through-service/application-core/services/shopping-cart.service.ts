import { IShoppingCartService } from "../services.abstractions/i-shopping-cart-service";

export class ShoppingCartService implements IShoppingCartService {

    private _isBuy: boolean = false;

    constructor() {
        // setInterval(() => {
        //     this._isBuy = !this._isBuy;
        //   }, 2000);
    }

    public buy(): void {
        this._isBuy = true;
    }
    
    public cancel(): void {
        this._isBuy = false;
    }

    public add(): void {
        throw new Error("Method not implemented.");
    }

    public sub(): void {
        throw new Error("Method not implemented.");
    }

    public isBuy(): boolean {
        return this._isBuy;
    }

}
