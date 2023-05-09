import { Injectable } from "@angular/core";
import { IShoppingCartRepository } from "../../../shopping-cart/application-core/domain/repositories/IShoppingCartRepository";
import { IRepositoryShoppingCartService } from "../services.abstractions/IRepositoryShoppingCartService";

@Injectable()
export class RepositoryShoppingCartService implements IRepositoryShoppingCartService {

    constructor(private _repository: IShoppingCartRepository) {}

    public buy(): void {
        this._repository.addProduct(4);
        console.log(this._repository.getProducts().length);
    }

    public cancel(): void {
        this._repository.deleteProduct(4);
        console.log(this._repository.getProducts().length);
    }

    public isBuy(): boolean {

        var products = this._repository.getProducts();

        for (const product of products) 
            if(product.productId == 4)
                return true;

        return false;
    }
    
}
