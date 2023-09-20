import { Product } from "../entities/product";

export abstract class IProductsRepository {
    abstract getProducts(): Product[];
}
