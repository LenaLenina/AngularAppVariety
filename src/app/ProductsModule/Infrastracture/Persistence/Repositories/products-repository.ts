import { Product } from 'src/app/ProductsModule/ApplicationCore/Domain/Entities/Product';
import { IProductsRepository } from 'src/app/ProductsModule/ApplicationCore/Domain/Repositories/IProductsRepository';
import { products } from 'src/app/products';

export class ProductsRepository implements IProductsRepository {
  public getProducts(): Product[] {
    return products;
  }
}
