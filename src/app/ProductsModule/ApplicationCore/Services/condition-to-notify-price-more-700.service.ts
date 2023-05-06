import { IConditionToNotify as IConditionToNotify } from '../Services.Abstractions/IConditionToNotify';
import { Product } from '../Domain/Entities/Product';

export class ConditionToNotifyPriceMore700 implements IConditionToNotify {

  public isEqual(product: Product): boolean {
    return product && product.price > 700;
  }
}
