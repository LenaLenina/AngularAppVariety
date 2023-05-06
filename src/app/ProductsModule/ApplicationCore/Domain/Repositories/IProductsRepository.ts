import { Product } from "../Entities/Product";

export abstract class IProductsRepository {
    abstract getProducts(): Product[];
}