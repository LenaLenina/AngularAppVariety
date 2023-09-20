import { Product } from "../../../core/domain/entities/product";
import { IProductsRepository } from "../../../core/domain/repositories/i-products-repository";
import { products } from "../../../products";

export class ProductsRepository implements IProductsRepository {
  public getProducts(): Product[] {
    return products;
  }
}
