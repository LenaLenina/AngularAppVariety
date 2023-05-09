import { CartEntity } from "src/app/shopping-cart/application-core/domain/entities/CartEntity";
import { IShoppingCartRepository } from "src/app/shopping-cart/application-core/domain/repositories/IShoppingCartRepository";


export class ShoppingCartRepository implements IShoppingCartRepository {

    carts: CartEntity[] = [
        { productId: 1 },
        { productId: 2 },
        { productId: 3 },
      ];

    public getProducts(): CartEntity[] {
        return this.carts;
    }
    
    public addProduct(id: number): void {
        this.carts.push({ productId: id });
    }

    public deleteProduct(id: number): void {
        const index = this.carts.findIndex((item) => item.productId === id);
        
        if (index === -1) return;

        this.carts.splice(index, 1);
    }
}
