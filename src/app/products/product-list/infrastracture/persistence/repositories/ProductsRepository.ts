import { Product } from 'src/app/products/product-list/application-core/domain/entities/Product';
import { IProductsRepository } from 'src/app/products/product-list/application-core/domain/repositories/IProductsRepository';
import { products } from 'src/app/products';

export class ProductsRepository implements IProductsRepository {
  public getProducts(): Product[] {
    return products;
  }
}
