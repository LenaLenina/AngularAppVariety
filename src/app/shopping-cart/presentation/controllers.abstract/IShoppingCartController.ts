import { Observable } from "rxjs";

export abstract class IShoppingCartController {

    abstract getIsBuyObservable(): Observable<boolean>;

    abstract isBuy(): boolean;

    abstract buy(): void;

    abstract cancel(): void;
}
