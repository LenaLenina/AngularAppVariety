import { Product } from "src/app/ProductsModule/ApplicationCore/Domain/Entities/Product";
import { ICartRepository } from "../../application-core/domain/repositories/icart-repository";

export class CartRepository implements ICartRepository{

  items: Product[] = [];

  public addToCart(product: Product): void {
    this.items.push(product);
  }

  public getItems(): Product[] {
    return this.items;
  }

  public clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}
