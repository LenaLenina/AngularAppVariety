import { Observable } from "rxjs";

export abstract class IProductBuyService{

    abstract getIsBuyObservable(): Observable<boolean>;

    abstract buy(): void;

    abstract cancel(): void;

    abstract isBuy(): boolean;
}
