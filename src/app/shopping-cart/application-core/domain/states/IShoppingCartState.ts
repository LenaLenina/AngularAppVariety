import { Subject } from "rxjs";


export abstract class IShoppingCartState { 
    abstract isBuy$: Subject<boolean>;
}
