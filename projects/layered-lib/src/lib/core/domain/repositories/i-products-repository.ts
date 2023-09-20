import { Product } from "../entities/Product";

export abstract class IProductsRepository {
    abstract getProducts(): Product[];
}
