import { IConditionToNotify } from '../services.abstractions/i-condition-to-notify-service';
import { Product } from '../domain/entities/product';

export class ConditionToNotifyPriceMore700 implements IConditionToNotify {

  public isEqual(product: Product): boolean {
    return product && product.price > 700;
  }
}
