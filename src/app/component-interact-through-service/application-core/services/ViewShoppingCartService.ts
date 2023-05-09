import { IViewShoppingCartService } from "../services.abstractions/IViewShoppingCartService";

export class ViewShoppingCartService implements IViewShoppingCartService {

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

    public isBuy(): boolean {
        return this._isBuy;
    }

}
