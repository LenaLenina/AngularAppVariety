import { Product } from "../../application-core/domain/entities/Product";

export abstract class IProductController{
    abstract getProducts(): Product[];

    abstract share(): void;
}
