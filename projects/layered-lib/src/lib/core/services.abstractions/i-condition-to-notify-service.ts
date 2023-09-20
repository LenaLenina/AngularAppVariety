import { Product } from "../domain/entities/product";


export abstract class IConditionToNotify{
    abstract isEqual(product: Product): boolean;
}
