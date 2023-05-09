import { CartEntity } from "../entities/CartEntity";

export abstract class IShoppingCartRepository{
    abstract getProducts(): CartEntity[];
    abstract addProduct(id: number): void;
    abstract deleteProduct(id: number): void;
}
