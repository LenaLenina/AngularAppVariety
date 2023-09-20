import { Product } from "../domain/entities/Product";

export abstract class IConditionToNotify{
    abstract isEqual(product: Product): boolean;
}
