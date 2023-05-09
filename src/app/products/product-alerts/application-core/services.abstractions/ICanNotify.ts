import { Product } from "../../../product-list/application-core/domain/entities/Product";

export abstract class ICanNotify{
    abstract canNotify(product: Product): boolean;
}
