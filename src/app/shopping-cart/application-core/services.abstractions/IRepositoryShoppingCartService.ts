import { IShoppingCartService } from "./IShoppingCartService";


export abstract class IRepositoryShoppingCartService extends IShoppingCartService {
    abstract isBuy(): boolean;
 }
