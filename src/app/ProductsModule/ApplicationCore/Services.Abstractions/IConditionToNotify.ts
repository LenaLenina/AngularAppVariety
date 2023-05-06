import { Product } from "../Domain/Entities/Product";

export abstract class IConditionToNotify{
    abstract isEqual(product: Product): boolean;
}
