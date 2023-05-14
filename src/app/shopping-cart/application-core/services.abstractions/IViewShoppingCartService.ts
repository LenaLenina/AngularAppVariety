import { Subject } from "rxjs";
import { IShoppingCartService } from "./IShoppingCartService";


export abstract class IViewShoppingCartService extends IShoppingCartService { 
    abstract isBuy$: Subject<boolean>;
}
