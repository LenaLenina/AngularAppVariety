import { ICanNotify as ICanNotify } from '../services.abstractions/ICanNotify';
import { Product } from '../../../product-list/application-core/domain/entities/Product';

export class CanNotifyIfPriceMore700 implements ICanNotify {

  public canNotify(product: Product): boolean {
    return product && product.price > 700;
  }
}
