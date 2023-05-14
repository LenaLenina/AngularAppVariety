import { Subject } from "rxjs";
import { IShoppingCartState } from "../../../application-core/domain/states/IShoppingCartState";


export class ShoppingCartState implements IShoppingCartState {
    public isBuy$: Subject<boolean> = new Subject<boolean>();
}
